import type { SchemaTypeDefinition } from 'sanity';

import { teamMember } from './teamMember';
import { communityEvent } from './communityEvent';
import { jobOpening } from './jobOpening';

export const schemaTypes: SchemaTypeDefinition[] = [teamMember, communityEvent, jobOpening];
