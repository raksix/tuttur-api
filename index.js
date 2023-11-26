const express = require('express')
const cheerio = require('cheerio');
const { elements } = require('./cheerio');
const { start_browser, get_browser } = require('./browser');
const app = express()



const ligs = {
   super_lig: `https://www.tuttur.com/bulten/futbol#2=parameter-leagueId-584|3=sort-date-1`,
   first_lig: "https://www.tuttur.com/bulten/futbol#2=parameter-leagueId-1980|3=sort-date-1"
}



const start = async () => {
   await start_browser({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
   })
}

app.get('/', (req, res) => {
   res.json({
      error: false,
      message: 'raksix >>> alls',
      endpoints: [
         "/tr/league/super",
         "/tr/league/first"
      ]
   })
})

app.get('/tr/league/super', async (req, res) => {
   const browser = get_browser()

   if (!browser) return res.json({
      error: true,
      message: 'Browser Bulunamadı'
   })

   const url = ligs.super_lig

   console.log(url)

   const page = await browser.newPage();
   await page.goto(url);

   await page.waitForSelector('#sportsBookEventRow-0')
   const body = await page.content()
   page.close()

   try {
      const html = cheerio.load(body);

      const all_matchs = []

      html(elements.leageus.main).children('div').each((idx, element) => {
         var el = cheerio.load(element)
         const match = {
            index: idx,
            hour: el('div').children('.time').text(),
            team_first: el('div').children('.sportsbookEventRow-header-team').first().text(),
            team_second: el('div').children('.sportsbookEventRow-header-team').next().text(),
            ms_one: el('div').children(elements.matchs.childrens.ms_one).first().text(),
            ms_x: el('div').children(elements.matchs.childrens.ms_x).first().text(),
            ms_second: el('div').children(elements.matchs.childrens.ms_second).first().text(),
            two_bq_down: el('div').children(elements.matchs.childrens.two_bq_down).first().text(),
            two_bq_up: el('div').children(elements.matchs.childrens.two_bq_up).first().text(),
            one_bq_down: el('div').children(elements.matchs.childrens.one_bq_down).first().text(),
            one_bq_up: el('div').children(elements.matchs.childrens.one_bq_up).first().text(),
            is_kg: el('div').children(elements.matchs.childrens.is_kg).first().text(),
            is_not_kg: el('div').children(elements.matchs.childrens.is_not_kg).first().text(),
         }

         all_matchs.push(match)
      })

      return res.json({
         error: false,
         message: 'Başarılı!',
         matchs: all_matchs
      })
   } catch (error) {
      return res.json({
         error: true,
         message: error
      })
   }

})

app.get('/tr/league/first', async (req, res) => {
   const browser = get_browser()

   if (!browser) return res.json({
      error: true,
      message: 'Browser Bulunamadı'
   })

   const url = ligs.first_lig

   console.log(url)

   const page = await browser.newPage();
   await page.goto(url);

   await page.waitForSelector('#sportsBookEventRow-0')
   const body = await page.content()
   page.close()

   try {
      const html = cheerio.load(body);

      const all_matchs = []

      html(elements.leageus.main).children('div').each((idx, element) => {
         var el = cheerio.load(element)
         const match = {
            index: idx,
            hour: el('div').children('.time').text(),
            team_first: el('div').children('.sportsbookEventRow-header-team').first().text(),
            team_second: el('div').children('.sportsbookEventRow-header-team').next().text(),
            ms_one: el('div').children(elements.matchs.childrens.ms_one).first().text(),
            ms_x: el('div').children(elements.matchs.childrens.ms_x).first().text(),
            ms_second: el('div').children(elements.matchs.childrens.ms_second).first().text(),
            two_bq_down: el('div').children(elements.matchs.childrens.two_bq_down).first().text(),
            two_bq_up: el('div').children(elements.matchs.childrens.two_bq_up).first().text(),
            one_bq_down: el('div').children(elements.matchs.childrens.one_bq_down).first().text(),
            one_bq_up: el('div').children(elements.matchs.childrens.one_bq_up).first().text(),
            is_kg: el('div').children(elements.matchs.childrens.is_kg).first().text(),
            is_not_kg: el('div').children(elements.matchs.childrens.is_not_kg).first().text(),
         }

         all_matchs.push(match)
      })

      return res.json({
         error: false,
         message: 'Başarılı!',
         matchs: all_matchs
      })
   } catch (error) {
      return res.json({
         error: true,
         message: error
      })
   }

})

start()

const port = process.env.port || 1337

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})