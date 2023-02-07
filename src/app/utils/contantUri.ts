const baseUrl = 'https://api.themoviedb.org/3';
export class ConstanrUri{
  public static readonly apiKey ='7ecfae62e9779b250d1ea89a53dab5fb';
  public static readonly validateWithLogin = baseUrl + '/authentication/token/validate_with_login';

  public static readonly tokenNew = baseUrl + '/authentication/token/new';
}
