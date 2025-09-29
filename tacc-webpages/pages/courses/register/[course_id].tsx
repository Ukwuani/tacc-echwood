"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../src/lib/supabase";
import {
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Box,
  Alert,
  CircularProgress,
  Paper,
  InputAdornment,
  Grid,
  IconButton,
} from "@mui/material";
import { Email, Person, Phone, School, Send } from "@mui/icons-material";
import Paystack from "@paystack/inline-js";
import { Scholarship } from "../../../src/types/Scholarship";
import dynamic from 'next/dynamic';

const CCourseRegistration = dynamic(() => import('./_component'), { ssr: false });


export default function CourseRegistration() {
  return <CCourseRegistration/>
}


