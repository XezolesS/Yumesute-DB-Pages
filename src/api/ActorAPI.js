// import axios from 'axios'

// import apiUrl from './API.js'

const mockData = {
  "data": [
      {
          "gekidan": "시리우스",
          "actor_name": "오오토리 코코나",
          "card_name": "시리우스",
          "rarity": "★1",
          "type": "채",
          "powers": {
              "act": 19118,
              "sing": 5686,
              "express": 6961,
              "concentrate": 6471
          },
          "leader_skill": "「시리우스」 카테고리 액터의 연기력 10% 상승",
          "staract": {
              "desc": [
                  "총 연기력의 1.2배 스코어 획득",
                  "null",
                  "null",
                  "null",
                  "null",
                  "총 연기력의 2.2배 스코어 획득"
              ],
              "condition": {
                  "green": 0,
                  "red": 1,
                  "yellow": 1,
                  "blue": 1
              }
          },
          "sense": {
              "type": "지원계",
              "cooldown": 30,
              "effect": [
                  "null",
                  "2.1배의 스코어 획득",
                  "null",
                  "null",
                  "null",
                  "2.9배의 스코어 획득"
              ]
          },
          "talent": [
              "null",
              "연기력 2% 증가",
              "연기력 2% 증가, 센스 CT 1초 감소, 연기력 2% 증가",
              "연기력 2% 증가",
              "연기력 2% 증가, 기초 스코어 1% 상승",
              "연기력 2% 증가"
          ],
          "categories": [
              "시리우스",
              "고등학생",
              "우타가와 학교"
          ]
      }
  ],
  "status": 200,
  "statusText": "",
  "headers": {
      "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
      "content-type": "application/json; charset=utf-8",
      "expires": "Mon, 01 Jan 1990 00:00:00 GMT",
      "pragma": "no-cache"
  },
  "config": {
      "transitional": {
          "silentJSONParsing": true,
          "forcedJSONParsing": true,
          "clarifyTimeoutError": false
      },
      "adapter": [
          "xhr",
          "http",
          "fetch"
      ],
      "transformRequest": [
          null
      ],
      "transformResponse": [
          null
      ],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1,
      "env": {},
      "headers": {
          "Accept": "application/json, text/plain, */*"
      },
      "params": {
          "type": "actor"
      },
      "method": "get",
      "url": "https://script.google.com/macros/s/AKfycbz2QGFSjkmko5FtrcMHnCnC6l2zUh_wV7OzyoKKUA1kdmEFvpSAv-6zHX2xWFoagopW/exec"
  },
  "request": {}
};

async function fetchActor() {
  try {
    /*
    const response = await axios.get(apiUrl, { 
      params: { type: 'actor' } 
    });
    
    return response;
    */

    return mockData;
  } catch (error) {
    console.error('Error: ', error);
  };

  return null;
};

export default fetchActor;