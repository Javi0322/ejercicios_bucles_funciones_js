const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
]

function findOldestXMen(xMen) {
  const oldestXMen = { 'X-Men más antiguo/s': [] }

  oldestXMen['X-Men más antiguo/s'].push(xMen[0])

  for (let i = 1; i < xMen.length; i++) {
    if (xMen[i].year < xMen[0].year) {
      xMen[0].year = xMen[i].year
      oldestXMen['X-Men más antiguo/s'] = [xMen[i]]
    } else if (xMen[i].year === xMen[0].year) {
      oldestXMen['X-Men más antiguo/s'].push(xMen[i])
    }
  }

  return oldestXMen
}

console.log(findOldestXMen(xMen))
