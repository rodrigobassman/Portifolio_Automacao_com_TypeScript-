export interface CenarioLogin {
  email: string;
  senha: string;
  esperaSucesso: boolean;
  msgEsperado: string;
  urlEsperada: RegExp;
}

export const ctsLogins: CenarioLogin[] = [

]
    urlEsperada: /painel\.html/
  