import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className'

ClassNameGenerator.configure((componentName) => `mtg-${componentName}`)
