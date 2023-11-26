

const texts = {
   live_match_count: "#layout > div.pageLayout-container > div.pageLayout-content > div > div > div > div.widget-content > div > div.sportsbookView > div.sportsbookViewSection > div.sportsbookViewSection-liveEventsContainer > div.sportsbookLeagueRow.sportsbookLeagueRow--liveMatches.sportsbookLeagueRow--liveMatches > div.sportsbookLeagueRow-label > span > div",
   live_matchs: {
      main: "#layout > div.pageLayout-container > div.pageLayout-content > div > div > div > div.widget-content > div > div.sportsbookView > div.sportsbookViewSection > div.sportsbookViewSection-liveEventsContainer > div.sportsbookViewSection-listGroup.sportsbookViewSection-listGroup-liveMatches.sportsbookViewSection-listGroup-liveMatchesInPrematch",
   },
}

const elements = {
   leageus: {
      main: "#layout > div.pageLayout-container > div.pageLayout-content > div > div > div > div.widget-content > div > div.sportsbookView > div.sportsbookViewSection > div:nth-child(1) > div > div"
   },
   matchs: {
      main: "div",
      childrens: {
         ms_one: "div.sportsbookEventRow-content > div:nth-child(1) > div:nth-child(1) > div.eventOdd-outcome",
         ms_x: "div.sportsbookEventRow-content > div:nth-child(1) > div:nth-child(2) > div.eventOdd-outcome",
         ms_second: "div.sportsbookEventRow-content > div:nth-child(1) > div:nth-child(3) > div.eventOdd-outcome",
         two_bq_up: "div.sportsbookEventRow-content > div:nth-child(2) > div.eventOdd.eventOdd--ratio-up > div.eventOdd-outcome",
         two_bq_down: "div.sportsbookEventRow-content > div:nth-child(2) > div.eventOdd.eventOdd--ratio-down > div.eventOdd-outcome",
         one_bq_up: "div.sportsbookEventRow-content > div:nth-child(3) > div.eventOdd.eventOdd--ratio-up > div.eventOdd-outcome",
         one_bq_down: "div.sportsbookEventRow-content > div:nth-child(3) > div.eventOdd.eventOdd--ratio-down > div.eventOdd-outcome",
         is_kg: "div.sportsbookEventRow-content > div:nth-child(4) > div.eventOdd.eventOdd--ratio-up > div.eventOdd-outcome",
         is_not_kg: "div.sportsbookEventRow-content > div:nth-child(4) > div.eventOdd.eventOdd--ratio-down > div.eventOdd-outcome",

      }
   }
}

module.exports = { texts, elements }