# 0.5.0 – Autoreload

## Features

* When you change a file that is currently loaded, the file data is automatically reloaded,
  so you can tweak your scene setup while the loop is running

# 0.4.0 – Autopilot

## Features

* New Autopilot toggle button in the transport section makes the program switch scenes automatically
* Autopilot toggle on/off is persistent across sessions, just like tempo, number of bars and beats
  per bar
* One of the scenes is always selected after a file has been loaded
    * specify selected scene in your JSON file by adding property “selected: true” to one of your
      scenes
    * if no scene in your file has property “selected: true”, the first scene is selected by
      default

# 0.3.0 – MIDI Output Bus Selection

## Features

* New preferences page lets you select the MIDI output bus to use

# 0.2.0 – Running in a Loop

## Features

* Transport bar that lets you start/stop your sequencer software that is connected via MIDI sync,
  running a loop of arbitrary length
* Configure tempo, number of bars and beats per bar by clicking on the numbers in the transport bar
* While the loop is running, when you click to select a scene, the scene change happens when the
  loop starts over
* Previously loaded file restored at startup
* Tempo, number of bars and beats per minute stored persistently between sessions

# 0.1.0 – Basic App With 16 Scenes

## Features

* Scenes view with up to 16 scene fields that send MIDI controller messages on click
* Supported programs: Propellerheads Reason combinator devices
* Setup is done through editing scsc files by hand


