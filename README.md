# Phantasy Star Online – Title Screen

I decided to try recreating the [*Phantasy Star Online*](https://en.wikipedia.org/wiki/Phantasy_Star_Online) title-screen using web technology.
For that reason, it is incredibly laggy... I do not recommend running at full screen!


This is not a faithful recreation of any particular PSO version, but it is most similar to [@HelloKitty](https://github.com/HelloKitty)'s version seen [here](https://www.youtube.com/watch?v=DB9-mvFJ53Q).



https://user-images.githubusercontent.com/35203441/191578167-c41efb7b-b756-4dd6-8897-8b62aa9ef919.mp4


### Getting Started
```
# clone repo and enter directory
$ npm i
$ npm run dev
# visit given port in browser
```

<br>

## Dev Notes:

<details style="display: flex; flex-direction: row">
  <summary><h3 style="display: inline"> Notable Sources: </h3></summary>
  
    NOTE – If you know of other relevant sources or title screen recreations, 
    let me know or make a PR, I'd be happy to add them here!
  

  - [@HelloKitty's PSOBB2 Title Screen](https://github.com/HelloKitty/Booma.PSOBB.Client/tree/master/Assets/Content)
    - [demo-video](https://www.youtube.com/watch?v=DB9-mvFJ53Q)
    - [dev-log video](https://www.youtube.com/watch?v=W8maC6ZdFqA)
    - /Sound/ - Has many useful sound effects and songs (title screen song included)
    - /UI/Titlescreen/ - Has the divided up assets of the title screen.  (I used the Orbs from here)
    - [PSOBB2 Discord had a good full-circle](https://cdn.discordapp.com/attachments/540689032712159281/770541845599223808/PSO.png)  (I used this in creating an SVG)
  - [GameCube Version](https://www.youtube.com/watch?v=7ORY-IFb3cY)
  - [Egg+ / anycoloregg](http://anycoloregg.web.fc2.com/PSO/ep3card/3_sozai.html)
    - [decent res full-circle](http://anycoloregg.web.fc2.com/PSO/ep3card/sozai/msg1130_1.gif)
    - [decent res inner-circle](http://anycoloregg.web.fc2.com/PSO/ep3card/sozai/msg1130_2.gif)  (I used this in creating an SVG)
  - [Circle Meaning](https://www.reddit.com/r/PSO/comments/8y4z8i/fan_translation_for_my_recent_pso_logo_project_i/)
  - [Fringes of Algo](http://www.psalgo.com/boards/phantasy-star-online-fonts-vd244.html)  (I used PSO font from here)
  - [dreamcast remake](https://cdn.discordapp.com/attachments/539772751796240386/959417156179742730/2022-04-01_12-43-34_psogame_480p.mp4)
    - notably shows use of a sprite based StarStream
  - Other Unused Fonts:  (its hard to know whats a duplicate or original source...)
    - [font2s/pso_test_regular](https://font2s.com/fonts/63345/pso_test_regular.html#.YysVlexKjOR)
    - [freefontsdownload/free-pso-test-regular-font](https://freefontsdownload.net/free-pso-test-regular-font-125365.htm)  (prob same as prior)
    - [wfonts/pso-test](https://www.wfonts.com/font/pso-test)  (prob same as prior)
    - [eleriaqueen/stylised-pso-font](https://www.pioneer2.net/community/threads/i-made-stylised-pso-fonts.13269/)  (links are broken, but I'd like a copy if anyone has them)
    - [fontstruct/phantasy_star_online](https://fontstruct.com/fontstructions/show/253199/phantasy_star_online)  (includes punctuation)
    - [fontstruct/phantasy_star_online_cyr_ver_1](https://fontstruct.com/fontstructions/show/253531/phantasy_star_online_cyr_ver_1)  (includes punctuation)
</details>


<details style="display: flex; flex-direction: row">
  <summary><h3 style="display: inline"> To-Do: </h3></summary>
  
    NOTE – StarStream utilizes a glitch in how two.js renders HSL colors, 
    where intensity/luminance is collective when overlapping. This breaks when window is resized... 
    I'm looking for a better solution... For now, the version is pinned incase its fixed.

  <details style="display: flex; flex-direction: row">
    <summary><i>PERFORMANCE:</i></summary>
    
  - [ ] Optimize Sigil svg et al.
  - [ ] Move svg animations to canvas
  - [ ] [Switch Two.js to webgl](https://two.js.org/docs/renderers/webgl/)  (`Two.Types.webgl`)
  - [ ] [Use faster canvas Lib](https://benchmarks.slaylines.io/)  (should be fine as long as it has path support)
  - [ ] [Don't even use js? – rust wasm + simd](https://www.reddit.com/r/rust/comments/tm10wi/media_i_made_a_website_to_demonstrate_performance/)
  - [ ] No sound until interaction – pretty sure there is no fix for web as its [the intended effect](https://developer.chrome.com/blog/autoplay)
  </details>
  <br>
  <details style="display: flex; flex-direction: row">
    <summary><i>ACCURACY:</i></summary>
  
  - [ ] Create a more accurate Sigil svg.
  - [ ] Hex Grid does not cover scree.n (its also scaled incorrectly)
  - [ ] Background is just a gradient, need a better image. (or see improvements)
  - [ ] I just guessed on colors, could prob color pick them.  (some of the blues and glows don't mesh as well as they should)
  - [ ] I believe the StarStream in the original uses rough sprites, while I use circles.
  - [ ] while these HD-remakes are nice, I believe you loose out a bit on the [CRT color-burnt intensity and bleeding colors](http://www.pso-world.com/images/guides/jplantern/00.jpg). (see improvements).
  - [ ] The Sparkle is probably the least accurate as its rays are not tapered.  (needs total rework)
  - [ ] action-text does not blink due to lag...
  - [ ] I guessed on rotation speeds based on HelloKitty/Gladers video
  - [ ] StartStream initializes from one point and may have gaps in center. The OG initializes within a range and doesn't have gaps in the middle afaik.
  - [ ] text blur is incorrect, is should be blurred away from the middle. but directional blur is hard to achieve with css. (unless [cloning the object multiple times](https://css-tricks.com/how-to-create-a-realistic-motion-blur-with-css-transitions/) and blurring together.)
  </details>
  <br>
  <details style="display: flex; flex-direction: row">
    <summary><i>IMPROVEMENTS:</i></summary>

  - [ ] Bg-text animations (ideas: infinite scroll, words that endlessly cycle characters, intermittently change a words letters with pr character slide animation, meaningful text like in [ep3 title screen](https://www.pso-world.com/forums/showthread.php?204265-Episode-3-Title-Background-Text))
  - [ ] Rather than grungy background image, use gradients/blurry objects that respond to mouse location/movement
  - [ ] Add strong white glow to sigil during Hex animation [Glader does this, I think its nice](https://www.youtube.com/watch?v=DB9-mvFJ53Q&t=8s).
  - [ ] Needs to handle more screen dimensions/resolution that originally designed for.
  - [ ] By moving more elements to canvas, a CRT shader can be used rather than a scan-line overlay. (add scan-lines, chromatic aberration, warp, color-burn, etc.)
    - [Acerola CRT breakdown](https://www.youtube.com/watch?v=aWdySZ0BtJs)
    - [Łukasz Łazarecki options walk through](https://www.youtube.com/watch?v=sa7eVUgb8Yw)
    - well known: [CRT-Royale](https://emulation.gametechwiki.com/index.php/CRT-Royale)
    - [Pixi js out of box filter](https://www.npmjs.com/package/@pixi/filter-crt)
    - [js Babylon walk-through](https://babylonjs.medium.com/retro-crt-shader-a-post-processing-effect-study-1cb3f783afbc)
    - [gflx js](https://www.zachstronaut.com/posts/2012/08/17/webgl-fake-crt-html5.html)
    - [vanilla js](https://gist.github.com/KHN190/d7c467a471b15e72302b16a9336440a5)
  </details>
</details>


<details style="display: flex; flex-direction: row">
  <summary><h3 style="display: inline"> Notable Tech: </h3></summary>

    NOTE – sorry for some of the package bloat, unused stuff is from my template
  
  - [Vite](https://github.com/vitejs/vite)
  - [Vue 3](https://github.com/vuejs)
  - [Two.js](https://github.com/jonobr1/two.js)
  - [Howler](https://github.com/goldfire/howler.js)
</details>

<br>

## Other PSO Info:

<details style="display: flex; flex-direction: row">
  <summary><h3 style="display: inline"> PSO Community Projects: </h3></summary>
  
  <details style="display: flex; flex-direction: row">
  <summary><i>SERVERS, EMULATORS, ET AL:</i></summary>
  
    
  - [NewServe](https://github.com/fuzziqersoftware/newserv) – PSO server/proxy
  - Booma : ([proxy](https://github.com/HelloKitty/Booma.Proxy) | [client](https://github.com/HelloKitty/PSOBB2.Client) | [server](https://github.com/HelloKitty/Booma.Server)) – PSO:bb emulation suite
  - PSO:BB2 : ([Library](https://github.com/kanon411/PSOBB2.Library) | [content](HelloKitty/PSOBB2.Content) | [Client](https://github.com/HelloKitty/PSOBB2.Client)) – PSO:bb remake in unity
  - [Telepipe](https://github.com/BygoneWorlds/telepipe) – PSO on Dolphin Emulator 
  - [Phantasmal](https://github.com/DaanVandenBosch/phantasmal-world) – web app, utils, and WIP  server
  </details><br>
  
  <details style="display: flex; flex-direction: row">
  <summary><i>CALC, STAT, & Utils:</i></summary>
  
  - [PSOCalc](https://github.com/gar-mil/psocalc) – PSO:bb section ID calc [ js ]
  - [ID_generator](https://github.com/DiggsAsura/PSO_Section_ID_generator) – PSO:gc section ID calc [ rust ]
  - [secid-calc](https://github.com/TimBeard/secid-calculator) – PSO section ID calc [ Vue.js ]
  - [MAG database](https://github.com/SethClydesdale/psobb-mag-database) – PSO:bb plugin
  - [MAG Calc](https://github.com/Jimaine/PsoMagCalculator) – PSO mag calculator
  - [MAG AI](https://github.com/Lemonilla/MagAi) – Generate Mag Feeding plan
  - [MAG Feeder](https://github.com/ariajanke/mag-feeder) – Mag Feeder Tool for PSOBB
  – [drop chart](https://github.com/SethClydesdale/psobb-drop-charts) – PSO:bb plugin for drop chart
  - [Map Simulator](https://github.com/aldelaro5/PSOMapRNGSimulation) – PSO:gc Map RGN simulation
  </details><br>
  
  
  <details style="display: flex; flex-direction: row">
  <summary><i>AESTHETICS:</i></summary>
    
    
  - [pso-highres-ui](https://github.com/eleriaqueen/pso-highres-ui) – highres ui for Dolphin emulator
  - [highres-dreamcast-ui](https://github.com/eleriaqueen/pso-highres-dreamcube-ui) – highres Dreamcast ui for Dolphin emulator
  - [Custom-HUD](https://github.com/izumidaye/psobb-custom-HUD) – PSO:bb custom hud plugin
  </details><br>  
</details>
 
<details style="display: flex; flex-direction: row">
  <summary><h3 style="display: inline"> PSO:BB Servers: </h3></summary>
  
  1. [Ephinea](https://ephinea.pioneer2.net)
  2. [Ultima](https://www.phantasystaronline.net)
  3. [Destiny](https://playpso.net)
  
</details>
  
  
  


