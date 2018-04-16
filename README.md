# Ionic-3-version-basicFeed
Ionic-3-version-basicFeed

NO CONSOLE RODAR
ionic start BasicFeeds tabs

PARA GERAR A NOVA PAGINA
https://ionicframework.com/docs/cli/generate/
ionic generate page Feeds

COLOCAR OS CARDS. NO HTML DA PAGINA
https://ionicframework.com/docs/components/#card-advanced-social

COLOCAR NO MENU INFERIOR NO 
	C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\app\app.module.ts, COLOCAR "FeedsPageModule"
DEPOIS EM 
	C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\pages\tabs\tabs.ts ADICIONA A TAB
ADICIONA NO 
	C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\pages\tabs\tabs.html

ALTERA O ICONE

CRIA A VARIAVEL NO ts DA CONTROLLER E CHAMA NO HTML

FUNÇÃO NO TYPESCRIPT

CRIAR A PAGINA DE SLIDES
ionic generate page Intro
ADICIONA A PAGINA DE SLIDE NO C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\app\app.module.ts

COLOCA A PAGINA DE INTRO
no C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\app\app.component.ts defini a pagina inicial do seu app

NO SLIDER COLOCA PARA O ULTIMO SLIDER CHAMAR O APP

MOSTRA A API
https://developers.themoviedb.org/3/movies/get-latest-movie

FAZER LOGIN

ADICIONAR MODULO HTTP NO ARQUIVO
C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\app\app.module.ts
https://angular.io/api/http/HttpModule

CRIAR UM NOVO ARQUIVO PARA CONFIGURAR O HTTP
ionic generate provider MovieProvider

Configura o novo provider no arquivo, no IMPORTS
C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\app\app.module.ts

ADICIONA AS CONFIGURAÇÕES DE PROVIDER NO ts DA PAGINA DE FEEDS
ADICIONANO CONTRUTOR

<h3>ARQUIVO DE CONFIGURAÇÕES</h3>
<p>criar a pasta "config" dentro de providers</p>
<a>C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\providers\config\config.ts</a>
<p>Dentro dela deva gravar no localStorage as informações </p>
<p>Adicionamos o um novo "provider" em C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\app\app.component.ts, com as configurações</p>
<p>Adicionamos tambem o config no construtor da so app.component, <a>C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\app\app.component.ts</a></p>
