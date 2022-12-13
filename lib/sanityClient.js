import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'fz05uevf',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk4eDtiiHx74xdTO641x421DAfoCeXIyQu6qXWJX0vgFh3zZJjKWC1u8LQhLUwTSfWR8lof3jpuntJbBfV9ipUQxfRCTws15PUHjX28KDzZPIc7CiujKggSi96LaAv3otqWTKrEV7T8szit3kjYOp6tPSy1opoJltPJo5RekVPcxh1WNRlyy',
  useCdn: false,
})
