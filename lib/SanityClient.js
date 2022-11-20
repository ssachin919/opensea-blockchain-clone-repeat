import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'z6zmizi4',
  dataset: 'production',
  apiVersion: '2022-11-20',
  token:
    'skendgaUX87xRCDDMYb5UXrI323oQDorcpZ3b1VlzmWzO9RhJj7cn0l0dVHKKTsIjOz5FpT964Vm3ck8kGvKzdzRTOyyxBfgmx2eVktSJuUtAKOBc0Cu0OnC8N7Jjblw52GY7uVqUQoAKXshQ6Yu5OydL7G4P1OPEsgCgDlXftw26p9O4c8d',
  useCdn: false,
})