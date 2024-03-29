import { styled } from '~styles'

export const MenuContent = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  userSelect: 'none',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 180,
  minWidth: 180,
  pointerEvents: 'all',
  backgroundColor: '$panel',
  boxShadow: '$panel',
  padding: '$2 $2',
  borderRadius: '$3',
  font: '$ui',
  variants: {
    size: {
      small: {
        minWidth: 72,
      },
    },
    overflow: {
      true: {
        maxHeight: '60vh',
        overflowY: 'auto',
        overflowX: 'hidden',
      },
    },
  },
  '-ms-overflow-style': 'none' /* for Internet Explorer, Edge */,
  scrollbarWidth: 'none',
  '&::webkit-scrollbar': {
    display: 'none',
  },
})
