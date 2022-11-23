const express = require('express')
const app = express()
const PORT = 7002
const Wallpaper = require('../database/model')
const seed = require('./seed')

app.use(express.json())

app.get('/wallpapers/get', async(req,res) => {
  res.send(await Wallpaper.findAll())
})

app.post('/wallpapers/', async(req,res) => {
  const {appName} = req.body
  const {appSrc} = req.body
  await Wallpaper.create({
    name: appName,
    src: appSrc
  })
})

app.delete('/wallpapers/delete/', async(req,res) => {
  const id = req.params.id
  await Wallpaper.destroy({where: {id: id}})
  res.send('done')
})

app.listen(PORT, seed())