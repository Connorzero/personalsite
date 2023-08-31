import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';
import sm from './slicemachine.config.json';

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'homepage':
      return '/';
    case 'page':
      return `/${doc.uid}`;
    case 'case_study':
      return `/case-studies/${doc.uid}`;
    default:
      return null;
  }
}

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    // If your repo is private, add an access token
    accessToken: process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN,
    ...config,
  });

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
}
