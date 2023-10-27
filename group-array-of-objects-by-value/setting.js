export const setting = {
  log: {
    style: {
      title: `
        padding: 0 0.5rem;
        background: linear-gradient(90deg, #1d4289 0%, #1d4289 50%, #c80f2e 50%, #c80f2e 100%);
        color: #fff;
        font-size: 1.5rem;
        font-weight: bold;
      `,
      postponed: `
        font-size: 1.5rem;
        color: #f00;
      `,
    },
    method: {
      title: function(title) {
        console.log(`%c${title}`, this.log.style.title);
      },
      postpone: function(error) {
        console.log('%cGAME POSTPONED', this.log.style.postponed)
        console.error('Error:', error);
      }
    }
  }
};