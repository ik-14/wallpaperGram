const db = require('../database/db')
const Wallpaper = require('../database/model')


async function seed() {
  await db.sync({force:true})

  Wallpaper.bulkCreate([
    {
      name: 'sunset lake',
      src: 'https://i.pinimg.com/originals/1a/9a/20/1a9a20cc06e7084d35a34f89ce756ad6.gif',
      likes:1
    },
    {
      name: 'kakashi hatake',
      src: 'https://i.pinimg.com/originals/f8/f1/c8/f8f1c8ba242e7dfece526467ee6d51bc.gif',
      likes:2
    },
    {
      name: 'sunset city',
      src: 'https://i.pinimg.com/originals/81/34/08/81340844a99a35cc7993166cbd9b5866.gif',
      likes:5
    },
    {
      name: 'train',
      src: 'https://i.pinimg.com/originals/a9/ce/20/a9ce200184b2176f3dc3868f14097182.gif',
      likes:3
    },

  ])
}

module.exports = seed