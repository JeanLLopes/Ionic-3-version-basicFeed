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

<h3>ADICIONANDO NOVAS PAGINAS</h3>
<p>roda o comando para criar novas paginas:</p>
<br>
ionic generate page configuracoes<br>
ionic generate page sobre<br>
ionic generate page perfil<br>
Adiciona as paginas no arquivo: C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\app\app.module.ts<br>
Adiciona na pagina de C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\pages\tabs\tabs.html<br>
C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\pages\tabs\tabs.ts<br>
Colocamos o menu lateral na pagina de configuracoes<br>
Colocamos a pagina perfil como ROOTPAGE da pagina de configurações<br>

<h3>ADICIONANDO O LOADER NA PAGINA DE FEEDS</h3>
<br>
<a>https://ionicframework.com/docs/components/#loading</a>
Vamos aplicar a nova controller no contrutor da pagina de FEEDS C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\pages\feeds\feeds.ts
<br>
Criamos os metodos de abrir e fechar no arquivo C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\pages\feeds\feeds.ts<br>
Alteramos de "ionViewDidLoad" para "ionViewDidEnter"

<h3>ADICIONANDO O "REFRESHER" NA PAGINA DE FEEDS</h3>
<br>
<a>https://ionicframework.com/docs/api/components/refresher/Refresher/</a><br>
copiamos o html do ionc para a pagina C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\pages\feeds\feeds.html<br>
criamos o metodo "doRefresh" para usar o refresher. 

<h3>ADICIONANDO NOVA PAGINA DE DETALHES DO FILME</h3>
<br>
<p>Criamos nova pagina ionic generate page filmeDetalhes</p>
<p>Adicionamos a pagina ao C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\app\app.module.ts</p>
<p>Criamos um novo metodo no provider C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\providers\movie\movie.ts</p>
<p>Adicionamos o provider e o novo metodo ao arquivo de detalhes C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\pages\filme-detalhes\filme-detalhes.ts</p>
<br>
<h3>ADICIONANDO COMPONENTE DE INFINETE SCROOL</h3>
<br>https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/
<br>Adicionamos o codigo HTML e o codigo ts.
<br>C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\pages\feeds\feeds.ts
<br> Atualizamos os codigos para carregar filmes
<br>
<h3>ADICIONANDO NOVO PROVIDER ( CARTOLA FC ) PROBLEMA COM CORS NO IONIC</h3>
<br>https://blog.ionicframework.com/handling-cors-issues-in-ionic/
<br>https://api.cartolafc.globo.com/atletas/mercado
<br>Adicionamos um novo provider ionic generate provider cartola
<br>Adicionamos uma nova pagina ionic generate page atletas
<br>ADICIONAMOS A PAGINA AO ARQUIVO DE C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\app\app.module.ts
<br>ADICIONAMOS A PAGINA AO ARQUIVO DE C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\pages\tabs\tabs.ts
<br>ADICIONAMOS A PAGINA AO ARQUIVO DE C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\pages\tabs\tabs.html
<br>Adicionamos o novo provider a pagina C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\pages\atletas\atletas.ts
<br>Aplicamos configurações de "proxy" no arquivo C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\ionic.config.json
<br>Aplicamos as alterações no arquivo C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\providers\cartola\cartola.ts
<br>
<h3>ADICIONANDO USO DE CAMERA PELO APP</h3>
<br>Adicionamos uma nova pagina ionic generate page camera
<br>ADICIONAMOS A PAGINA AO ARQUIVO DE C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\app\app.module.ts
<br>ADICIONAMOS A PAGINA AO ARQUIVO DE C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\pages\tabs\tabs.ts
<br>ADICIONAMOS A PAGINA AO ARQUIVO DE C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\src\pages\tabs\tabs.html
<br>https://ionicframework.com/docs/native/camera/
<br>ionic cordova plugin add cordova-plugin-camera
<br>npm install --save @ionic-native/camera
<br>Adicionamos a plataforma do browser no nosso APP, para que ele possa usar as configurações do nosso computador como um dispositivo
<br>ionic cordova platform add browser
<br>apos isso para usar o comando abaixo para rodar o app, forçando o para rodar no browser
<br>ionic cordova run browser