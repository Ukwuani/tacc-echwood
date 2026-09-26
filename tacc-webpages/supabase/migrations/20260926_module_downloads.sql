-- Download counter for Ignition custom modules.
create table if not exists public.module_downloads (
  slug text primary key,
  download_count bigint not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.module_downloads enable row level security;

-- Anyone can read counts; nobody can write directly (writes go through the RPC below).
drop policy if exists "Public can read module download counts" on public.module_downloads;
create policy "Public can read module download counts"
  on public.module_downloads for select
  to anon, authenticated
  using (true);

-- Atomically increments the counter for an existing module and returns the new count.
-- Only updates rows that already exist, so clients can't create arbitrary slugs.
create or replace function public.increment_module_download(p_slug text)
returns bigint
language sql
security definer
set search_path = public
as $$
  update public.module_downloads
     set download_count = download_count + 1,
         updated_at = now()
   where slug = p_slug
  returning download_count;
$$;

revoke all on function public.increment_module_download(text) from public;
grant execute on function public.increment_module_download(text) to anon, authenticated;

insert into public.module_downloads (slug) values ('git-auto-push')
on conflict (slug) do nothing;
