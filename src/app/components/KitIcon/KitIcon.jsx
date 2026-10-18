// React 19 ya no aplica `defaultProps` en componentes de función, y el Icon de
// react-icons-kit depende de ellos (tag="i", size=16, fill). withBaseIcon pasa
// esos mismos valores de forma explícita, así el HTML queda igual que antes.
import { withBaseIcon } from 'react-icons-kit'

export const Icon = withBaseIcon({ size: 16, fill: 'currentColor', tag: 'i' })
