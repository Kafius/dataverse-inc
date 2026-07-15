/**
 * One-shot import of the team, community event, and job opening content that used to be
 * hardcoded in the Astro components, plus the photos that lived in public/images/.
 *
 * Usage: node scripts/migrate-to-sanity.mjs [--force]
 *
 * Refuses to run if content already exists, so a stray re-run cannot duplicate the dataset.
 */
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import { loadEnv } from 'vite';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const env = loadEnv('development', root, '');

const { PUBLIC_SANITY_PROJECT_ID: projectId, PUBLIC_SANITY_DATASET: dataset, SANITY_WRITE_TOKEN: token } = env;

if (!projectId || !dataset || !token) {
  console.error('Missing PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, or SANITY_WRITE_TOKEN in .env');
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: '2026-07-15', useCdn: false });

const team = [
  { name: 'Robin De Leon', photo: 'ROBIN.jpg', role: 'Chief Information Officer' },
  { name: 'Caroline De Leon', photo: 'CAROLINE.jpeg', role: 'Chief Executive Officer' },
  { name: 'Dennis Alfred De Leon', photo: 'DENNIS.png', role: 'Director of Sales, Marketing & Business Development' },
  { name: 'Crystal Mae Tacadena', photo: 'CRYSTAL.png', role: 'Team Lead' },
  { name: 'Kharen Abayon', photo: 'KHAREN.png', role: 'Team Lead' },
  { name: 'Jemimah Salem', photo: 'JEMIMAH.png', role: 'Dataverse Agent' },
  { name: 'Khrisma Crisostomo', photo: 'KHRISMA.png', role: 'Dataverse Agent' },
  { name: 'Lara Jane Carpio', photo: 'LARA.png', role: 'Dataverse Agent' },
  { name: 'Kyla Marie C. Molo', photo: 'KYLA.png', role: 'Dataverse Agent' },
  { name: 'Dejay Dela Cruz Valencia', photo: 'DEJAY.png', role: 'Dataverse Agent' },
  { name: 'Avi Jae Nino Bravo', photo: 'AVI JAE.png', role: 'Dataverse Agent' },
  { name: 'Ghayzel Marie Reyes', photo: 'GHAYZEL.png', role: 'Dataverse Agent' },
  { name: 'Jan Miles B. Ta-ay', photo: 'JAN MILES.png', role: 'Dataverse Agent' },
  { name: 'Juluis Caesar D Candelario', photo: 'JULUIS.png', role: 'Dataverse Agent' },
  { name: 'Aleah Dane Bautista', photo: 'ALEAH.png', role: 'Dataverse Agent' },
  { name: 'Arien Dane F. Bautista', photo: 'ARIEN.png', role: 'Dataverse Agent' },
  { name: 'Arnelyn De Juan Hontilano', photo: 'ARNELYN.png', role: 'Dataverse Agent' },
];

const initiatives = [
  {
    tag: 'Holiday Celebration',
    photo: 'easter-2026',
    title: 'Easter 2026',
    desc: 'Annual Easter Celebration 2026 — an eggs-tra special day with eggs-tra special people, strengthening collaboration and fostering gratitude.',
    detail: 'Celebrating Easter together as a family and team, sharing joy, gratitude, and positivity to start the year with renewed spirit.',
  },
  {
    tag: 'Holiday Celebration',
    photo: 'christmas-2025',
    title: 'Christmas Celebration 2025',
    desc: 'Dataverse Inc. celebrated the season with a heartfelt Christmas gathering, bringing together employees and their families in a warm and festive atmosphere.',
    detail: 'The occasion reflected joy, appreciation, and a shared sense of community, highlighting the strong bonds that shape and inspire the Dataverse family.',
  },
  {
    tag: 'Company Culture',
    photo: 'halloween-2025',
    title: 'Halloween Fun Fest 2025',
    desc: "At Dataverse, Halloween wasn't just about costumes — it was about connection and fun. Creep It Real: Dataverse Inc. Halloween Fun Fest!",
    detail: 'The effort everyone put in made the celebration lively and exciting, giving us a chance to relax, enjoy, and appreciate the team we have.',
  },
  {
    tag: 'Charity Outreach',
    photo: 'charity-event-2025',
    title: 'Charity Event 2025',
    desc: 'Sharing love, care, and nourishment with the elderly at the Polo Missionaries of Charity — our mission goes beyond business.',
    detail: 'Through outreach, we served, uplifted spirits, and created moments of warmth, dignity, and compassion for the community.',
  },
  {
    tag: 'Company Milestone',
    photo: 'anniversary-2025',
    title: '3rd Anniversary 2025',
    desc: 'Three years of innovation, growth, and success — Happy 3rd Anniversary to Dataverse Inc.!',
    detail: "We're so proud of how far we've come and even more excited about what the future holds for our growing family.",
  },
  {
    tag: 'Holiday Celebration',
    photo: 'easter-2025',
    title: 'Easter 2025',
    desc: "Dataverse proves you're never too old for an egg hunt! Easter Fun with the whole team — eggs-tra special and eggciting.",
    detail: 'Eggs symbolized the resurrection and re-birth of Jesus as we celebrated together, sharing joy and laughter across the team.',
  },
  {
    tag: 'Company Culture',
    photo: 'valentines-day-2025',
    title: "Valentine's Day 2025",
    desc: "Valentine's Day 2025 served as a reminder that strong organizations are built on strong relationships.",
    detail: 'During our company event, we came together to appreciate the dedication, teamwork, and positive culture that defines who we are.',
  },
  {
    tag: 'Cultural Festival',
    photo: 'ati-atihan-2025',
    title: 'Ati-Atihan 2025',
    desc: 'Dataverse Inc. hit the streets and immersed in the vibrant energy of the Kalibo Ati-Atihan 2025 — one team, one rhythm, one celebration.',
    detail: "From rhythmic drums to shared smiles, we're honored to be part of this incredible tradition. Grateful for the teamwork that keeps us moving. Hala Bira, Pwera Pasma!",
  },
  {
    tag: 'Holiday Celebration',
    photo: 'christmas-2024',
    title: 'Christmas Celebration 2024',
    desc: 'Christmas 2024 is a beautiful reminder of what truly matters — love, kindness, and the connections we share with one another.',
    detail: 'In the midst of celebrations and festive lights, the simple moments of togetherness and gratitude made the season meaningful.',
  },
  {
    tag: 'Team Building',
    photo: 'team-building-2024',
    title: 'Team Building 2024',
    desc: "Our first ever Dataverse Inc. team building was a blast — building more than just data, we're building connections!",
    detail: 'The experience left the entire team feeling closer, more motivated, and inspired to continue growing together.',
  },
  {
    tag: 'Company Culture',
    photo: 'birthdays',
    title: 'Birthday Celebrations',
    desc: 'Birthday celebrations are a core part of Dataverse culture — making every team member feel special on their big day.',
    detail: 'A strong, engaged, and positive workplace culture where recognition and appreciation remain at the heart of Dataverse Inc.',
  },
  {
    tag: 'Social Events',
    photo: 'team-dinners',
    title: 'Team Dinners',
    desc: 'From busy workdays to a relaxing dinner — good food, great company, and celebrating the team that makes it all happen.',
    detail: 'These team dinners are a cherished tradition that bring the Dataverse family together beyond the office walls.',
  },
  {
    tag: 'Social Events',
    photo: 'outings',
    title: 'Team Outings',
    desc: "Dataverse isn't all about working — behind the dedication and busy schedules, the team always finds time to enjoy life beyond the office.",
    detail: 'Outings held five or more times a year give agents a chance to relax, recharge, and make memories when work feels most demanding.',
  },
];

const jobs = [
  { title: 'Data Entry Specialist', dept: 'Back Office', type: 'Full-Time', location: 'On-Site / Remote' },
  { title: 'Medical Billing & Coding Specialist', dept: 'Healthcare', type: 'Full-Time', location: 'Remote Available' },
  { title: 'Call Center Representative', dept: 'Call Center', type: 'Full-Time / Part-Time', location: 'On-Site' },
  { title: 'Transcriptionist', dept: 'Transcription', type: 'Contract / Full-Time', location: 'Remote' },
  { title: 'Cue Sheet Processor', dept: 'Entertainment', type: 'Full-Time', location: 'On-Site' },
  { title: 'Administrative Support Coordinator', dept: 'Admin', type: 'Full-Time', location: 'Hybrid' },
  { title: 'Quality Assurance Analyst', dept: 'Operations', type: 'Full-Time', location: 'On-Site / Remote' },
  { title: 'Client Success Associate', dept: 'Client Relations', type: 'Full-Time', location: 'Hybrid' },
];

async function uploadImage(filePath) {
  await stat(filePath); // fail loudly on a missing photo rather than creating a doc without one
  const asset = await client.assets.upload('image', createReadStream(filePath), {
    filename: path.basename(filePath),
  });
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

async function main() {
  const force = process.argv.includes('--force');
  const existing = await client.fetch('count(*[_type in ["teamMember", "communityEvent", "jobOpening"]])');
  if (existing > 0 && !force) {
    console.error(`Dataset already has ${existing} document(s). Re-run with --force only if you want duplicates.`);
    process.exit(1);
  }

  console.log(`Importing into ${projectId}/${dataset}\n`);

  for (const [index, member] of team.entries()) {
    const photo = await uploadImage(path.join(root, 'public/images/team', member.photo));
    await client.create({ _type: 'teamMember', name: member.name, role: member.role, photo, order: index });
    console.log(`  team       ${index + 1}/${team.length}  ${member.name}`);
  }

  for (const [index, item] of initiatives.entries()) {
    const photo = await uploadImage(path.join(root, 'public/images/community', `${item.photo}.jpg`));
    await client.create({
      _type: 'communityEvent',
      title: item.title,
      tag: item.tag,
      description: item.desc,
      detail: item.detail,
      photo,
      order: index,
    });
    console.log(`  event      ${index + 1}/${initiatives.length}  ${item.title}`);
  }

  for (const [index, job] of jobs.entries()) {
    await client.create({
      _type: 'jobOpening',
      title: job.title,
      department: job.dept,
      employmentType: job.type,
      location: job.location,
      order: index,
    });
    console.log(`  job        ${index + 1}/${jobs.length}  ${job.title}`);
  }

  console.log(`\nDone: ${team.length} team members, ${initiatives.length} events, ${jobs.length} job openings.`);
}

main().catch((error) => {
  console.error('\nImport failed:', error.message);
  process.exit(1);
});
