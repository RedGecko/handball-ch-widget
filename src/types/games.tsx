export interface GamePlayed {
    gameId: number,
    gameNr: number,
    gameDateTime: Date,
    gameTypeLong: string,
    gameTypeShort: string,
    teamAName: string,
    teamBName: string,
    leagueLong: string,
    leagueShort: string,
    gameStatus: string,
    teamAScoreHT: number,
    teamBScoreHT: number,
    teamAScoreFT: number,
    teamBScoreFT: number
    spectators: number,
};


export interface GamesPlanned {
    gameId: number,
    gameNr: number,
    gameDateTime: Date,
    gameTypeLong: string,
    gameTypeShort: string,
    teamAName: string,
    teamBName: string,
    leagueLong: string,
    leagueShort: string,
    gameStatus: string,
    venue: string,
    venueAddress: string,
    venueZip: number,
    venueCity: string,
};
