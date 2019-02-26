# Ionic - Starter Project Structure
Proyecto Ionic3 + Angular5

## Pasos para probar la app:
--------------------
- Instalar Ionic    
`npm install -g ionic`

- Instalar Cordova  
`npm install -g cordova`

- Descargarse el proyecto   
- Situarse en la carpeta del proyecto (borrar node_modules si ya existía con el comando que se muestra) e instalar dependencias   
`rm -rf node_modules package-lock.json`  
`npm install`  

- Correr el proyecto en el navegador (si pregunta por instalar componentes, aceptar)    
`ionic serve --lab`

- Para correr el proyecto en el navegador con los plugins de Cordova    
`ionic cordova run browser`

- Correr el proyecto en el dispositivo móvil    

    _Limpiar los proyectos móviles generados y volverlos a crear_    
    `ionic cordova platform rm ios`     
    `ionic cordova platform add ios`    
    `ionic cordova build ios`    
    `ionic cordova platform rm android`     
    `ionic cordova platform add android`    
    `ionic cordova build android`    

    _En otras versiones de Ionic pueden ser los siguientes_   
    `ionic cordova rm android`  
    `ionic cordova add android`     
    `ionic cordova rm ios`  
    `ionic cordova add ios`     

    _Correr en iOS: en una Mac abrir en el Finder la siguiente ruta dentro del proyecto "platforms->ios". Después abrir el archivo "*.xcodeproject" con XCode, firmarlo e iniciarlo._

    _Correr en Android: abrir la siguiente ruta dentro del proyecto "platforms->android". Después abrir el archivo "*.project" con Android Studio e iniciarlo._

- Otra opción es correr las aplicaciones desde la terminal (al correr este comando, el proyecto Mobile abierto, se actualiza)   
`ionic cordova run android`     
`ionic cordova run ios`     

- Para probar los cambios que se van realizando en el proyecto y no tener que borrar/agregar el platform nuevamente 
`ionic build ios/android`   

## Detalles/Descripción
--------------------
- Documentación de Ionic    
<https://ionicframework.com/docs/>  
- Instructivo para comandos Ionic   
<https://ionicframework.com/docs/cli/>    
- Iconos Ionic  
<https://ionicframework.com/docs/ionicons/>      
- Searchable Select     
<https://ionicacademy.com/ionic-searchable-select-component/>   
- Selectable search (async)     
<https://github.com/eakoriakin/ionic-selectable#getting-started>    
<https://stackblitz.com/edit/ionic-selectable-on-search?file=services%2Fport.service.ts>    
- Timeline component    
<https://competenepal.com/beautiful-timeline-component-in-ionic-3/>     

## Fixes
--------------------
## Error en AndroidStudio:
Para corregir error de Manifest al abrir el proyecto en AndroidStudio   
<https://stackoverflow.com/questions/43140059/add-toolsreplace-androidvalue-to-meta-data-element-at-androidmanifest>  
    
  _Si el AndroidStudio (3.1) no refresca los cambios en cada nuevo deploy, hacer lo siguiente:_   
  _En Android Studio, ir a "Run > Edit Configuration"._      
  _Dentro de "Before launch": Agregar "Gradle-aware Make" y dejar vacía la tarea._      

## Plugin para resolver problemas de Gradle en Android:
<https://github.com/dpa99c/cordova-android-support-gradle-release>

## Hilo con opciones para corregir SplashScreen:
<https://forum.ionicframework.com/t/after-splash-screen-display-white-screen-long-time/80162/31>
    
    <preference name="AutoHideSplashScreen" value="false" />
    <preference name="SplashScreenDelay" value="10000" />
    <preference name="FadeSplashScreenDuration" value="1000" />
    <preference name="SplashScreen" value="screen" />
    <preference name="ShowSplashScreen" value="true" />
    <preference name="ShowSplashScreenSpinner" value="false" />
    <preference name="SplashShowOnlyFirstTime" value="false" />
    <preference name="FadeSplashScreen" value="true" />

## Corregir pantalla negra antes de Splash:
    Ir a platform/android/AndroidMainfest.xml .
    Buscar android:theme="android:style/Theme.DeviceDefault.NoActionBar".          
    Cambiar por android:theme="android:style/Theme.Translucent.NoActionBar".

## Error al generar proyecto Android (Invalid data, chunk must be a string or buffer, not object)   
<https://github.com/fechanique/cordova-plugin-fcm/issues/481>   

    Archivo: plugins/cordova-plugin-fcm/scripts/fcm_config_files_process.js 
    change 
    var strings = fs.readFileSync("platforms/android/res/values/strings.xml").toString(); 
    to 
    var strings = fs.readFileSync("platforms/android/app/src/main/res/values/strings.xml").toString(); 
    change 
    fs.writeFileSync("platforms/android/res/values/strings.xml", strings); 
    to 
    fs.writeFileSync("platforms/android/app/src/main/res/values/strings.xml", strings); 

    Copiar: 
    platforms/android/google-services.json 
    platforms/android/app/google-services.json    

## Corregir visualización en Ionic Serve:   
    Instalar `npm install @ionic/lab@rc`    
    
## Pasos para borrar Ionic/Cordova  
`npm uninstall -g ionic`    
`npm uninstall -g cordova`  
`npm cache clean -f`    
`npm list -g --depth=0 (check list of npm dependencies installed)`      
