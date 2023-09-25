'use server';

import { cookies } from 'next/headers';

export async function createCookie(uuid) {
  'use server';
  cookies().set('__prepr_uid', uuid);
}
