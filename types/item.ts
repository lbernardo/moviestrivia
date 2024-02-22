export interface Item {
  backdrop_path:     string;
  id:                string;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      string;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
  year:              number;
}

export type PlayedItem = Item & {
  played: {
    correct: boolean;
  };
};
