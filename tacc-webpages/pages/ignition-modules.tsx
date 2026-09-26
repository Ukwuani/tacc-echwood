import * as React from 'react';
import Head from 'next/head';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { CheckCircle, CloudDownload, GitHub, Extension } from '@mui/icons-material';
import DefaultLayout from '../src/DefaultLayout';
import { supabase } from '../src/lib/supabase';

type IgnitionModule = {
  slug: string;
  name: string;
  version: string;
  ignitionVersion: string;
  tagline: string;
  description: string;
  features: string[];
  downloadUrl: string;
  sourceUrl: string;
  fileName: string;
};

const modules: IgnitionModule[] = [
  {
    slug: 'git-auto-push',
    name: 'Git Auto Push',
    version: '0.1.0',
    ignitionVersion: '8.1+',
    tagline: 'Automatic Git version control for your Ignition projects.',
    description:
      'Git Auto Push is an Ignition Gateway module that brings Git version control directly into your Ignition workflow. ' +
      'Every time a project is saved in the Designer, the module detects the changes, commits them with the author and ' +
      'timestamp, and pushes them to your remote repository — no manual exports, no forgotten backups. ' +
      'Keep a complete, auditable history of your views, scripts, tags and gateway resources, and roll back with confidence.',
    features: [
      'Auto-commit on Designer project save',
      'Push to GitHub, GitLab, Bitbucket or any Git remote',
      'Commit messages include the Designer user and timestamp',
      'Tracks Perspective views, scripts, named queries and tag exports',
      'Configurable branch and remote from the Gateway web interface',
      'SSH key and HTTPS token authentication',
    ],
    downloadUrl: 'https://github.com/Ukwuani/git-ignition-module-automationcc/releases/download/v0.1.0/Git-Auto-Push-By-AutomationCC.modl',
    sourceUrl: 'https://github.com/Ukwuani/git-ignition-module-automationcc/blob/main/Git-Auto-Push-By-AutomationCC.modl',
    fileName: 'Git-Auto-Push-By-AutomationCC.modl',
  },
];

function ModuleCard({ module }: { module: IgnitionModule }) {
  const [count, setCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    supabase
      .from('module_downloads')
      .select('download_count')
      .eq('slug', module.slug)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) console.error(error);
        setCount(data?.download_count ?? 0);
      });
  }, [module.slug]);

  const handleDownload = async () => {
    setCount((c) => (c ?? 0) + 1);
    const { data, error } = await supabase.rpc('increment_module_download', { p_slug: module.slug });
    if (error) console.error(error);
    else if (typeof data === 'number') setCount(data);
  };

  return (
    <Card sx={{ borderRadius: 4, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}>
      <CardContent sx={{ p: { xs: 3, md: 5 } }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems={{ sm: 'center' }}>
          <Box
            sx={{
              width: 72,
              height: 72,
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #0066ff 0%, #00c9ff 100%)',
              color: 'white',
              flexShrink: 0,
            }}
          >
            <GitHub sx={{ fontSize: 40 }} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              {module.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {module.tagline}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1.5, flexWrap: 'wrap', gap: 1 }}>
              <Chip size="small" label={`v${module.version}`} />
              <Chip size="small" label={`Ignition ${module.ignitionVersion}`} color="primary" variant="outlined" />
              <Chip size="small" label="Gateway Module" variant="outlined" />
            </Stack>
          </Box>
        </Stack>

        <Divider sx={{ my: 4 }} />

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
              About
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
              {module.description}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Features
            </Typography>
            <List dense disablePadding>
              {module.features.map((f) => (
                <ListItem key={f} disableGutters>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircle color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={f} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems={{ xs: 'stretch', sm: 'center' }}
          justifyContent="space-between"
        >
          <Typography color="text.secondary">
            <strong>{count === null ? '—' : count.toLocaleString()}</strong> downloads
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="outlined"
              size="large"
              startIcon={<GitHub />}
              href={module.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ borderRadius: '50px', px: 4, py: 1.5, textTransform: 'none', fontWeight: 600 }}
            >
              View on GitHub
            </Button>
            <Button
              variant="contained"
              size="large"
              startIcon={<CloudDownload />}
              href={module.downloadUrl}
              download={module.fileName}
              onClick={handleDownload}
              sx={{ borderRadius: '50px', px: 5, py: 1.5, textTransform: 'none', fontWeight: 600 }}
            >
              Download .modl
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function IgnitionModules() {
  return (
    <>
      <Head>
        <title>Ignition Custom Modules | TACC</title>
        <meta
          name="description"
          content="Free custom Ignition modules from TACC, including Git Auto Push — automatic Git version control for Ignition projects."
        />
        <link rel="canonical" href="https://automationcc.com/ignition-modules" />
      </Head>
      <DefaultLayout page="Modules">
        <Box sx={{ bgcolor: '#fafafa', minHeight: '100vh', pb: 10 }}>
          <Box
            sx={{
              background: 'linear-gradient(135deg, #0066ff 0%, #00c9ff 100%)',
              py: { xs: 8, md: 12 },
              color: 'white',
              textAlign: 'center',
            }}
          >
            <Container maxWidth="md">
              <Extension sx={{ fontSize: 56, mb: 2 }} />
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2.2rem', md: '3.5rem' } }}>
                Ignition Custom Modules
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.95, lineHeight: 1.6 }}>
                Modules built by TACC to extend Inductive Automation&apos;s Ignition platform. Download, install from
                the Gateway&apos;s Config &rarr; Modules page, and you&apos;re ready to go.
              </Typography>
            </Container>
          </Box>

          <Container maxWidth="lg" sx={{ mt: { xs: -4, md: -6 } }}>
            <Stack spacing={4}>
              {modules.map((m) => (
                <ModuleCard key={m.slug} module={m} />
              ))}
            </Stack>
          </Container>
        </Box>
      </DefaultLayout>
    </>
  );
}
