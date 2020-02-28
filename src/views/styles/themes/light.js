const breakpoints = [0, '576px', '768px', '992px', '1200px'];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default {
  name: 'light',
  typography: {
    fontFamily: '"Kalpurush", sans-serif',
    fontSize: '20px',
    lineHeight: 1.65,
    fontWeight: '400',
    h1: {
      fontSize: '2.488rem',
      lineHeight: 1.65,
      fontWeight: 700,
      fontFamily: '"Kalpurush", sans-serif',
    },
    h2: {
      fontSize: '2.074rem',
      lineHeight: 1.65,
      fontWeight: 700,
      fontFamily: '"Kalpurush", sans-serif',
    },
    h3: {
      fontSize: '1.728rem',
      lineHeight: 1.65,
      fontWeight: 700,
      fontFamily: '"Kalpurush", sans-serif',
    },
    h4: {
      fontSize: '1.44rem',
      lineHeight: 1.65,
      fontWeight: 700,
      fontFamily: '"Kalpurush", sans-serif',
    },
    h5: {
      fontSize: '1.2rem',
      lineHeight: 1.65,
      fontWeight: 700,
      fontFamily: '"Kalpurush", sans-serif',
    },
    h6: {
      fontSize: '1rem',
      lineHeight: 1.65,
      fontWeight: 700,
      fontFamily: '"Kalpurush", sans-serif',
    },
    body: {
      fontSize: '1rem',
      lineHeight: 1.65,
      fontWeight: 400,
      fontFamily: '"Kalpurush", sans-serif',
    },
    caption: {
      fontSize: '0.833rem',
      lineHeight: 1.65,
      fontWeight: 400,
      fontFamily: '"Kalpurush", sans-serif',
    },
  },
  colors: {
    primary3: '#7950F2',
    primary2: '#845EF7',
    primary1: '#9775FA',
    dark2: '#212529',
    dark1: '#495057',
    light2: '#F1F3F5',
    light1: '#f8f9fa',
    error: '#FA5252',
    success: '#51CF66',
    warning: '#FFD43B',
    text: '#212529',
    background: '#f8f9fa',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  breakpoints,
};
