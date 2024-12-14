import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: 'amplifyBucketTrackerImages',
  access: (allow) => ({
    'media/{entity_id}/*': [ // entity id equals the owner id
      allow.entity('identity').to(['read', 'write','delete'])
    ]
  })
})