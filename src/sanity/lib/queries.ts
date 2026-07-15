import { defineQuery } from 'groq';

export const TEAM_QUERY = defineQuery(/* groq */ `
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    photo
  }
`);

export const COMMUNITY_EVENTS_QUERY = defineQuery(/* groq */ `
  *[_type == "communityEvent"] | order(order asc) {
    _id,
    title,
    tag,
    description,
    detail,
    photo
  }
`);

export const JOB_OPENINGS_QUERY = defineQuery(/* groq */ `
  *[_type == "jobOpening"] | order(order asc) {
    _id,
    title,
    department,
    employmentType,
    location
  }
`);
