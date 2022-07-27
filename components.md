#Components

- Info

  - Receives: text "calling..."
  - State: hidden
  - Show: text
  - Actions:

- Display

  - Receives: array
  - State:
  - Show: text
  - Actions:

- Actions

  - Receives: isCalling
  - State:
  - Show:
  - Actions: receives a click

  * Action

    - Call
      - Receives: isCalling
      - State:
      - Show: text call
      - Actions: activate text "calling..."
    - Hang
      - Receives:
      - State:
      - Show: text hang
      - Actions:

- Keyboard

  - Receives:
  - State:
  - Show:
  - Actions: deactivate when isCalling is active

  * Key

    - Receives:
    - State:
    - Show:
    - Actions: receives a click

    <!-- * Delete
      - Receives:
      - State:
      - Show:
      - Actions: receives a click -->

# Data Layer

- One object with properties:

  - tel number
  - isCalling: boolean
  -

- Data Changes:

  - add/erase numbers
  - set isCalling status to true or false - show/hide (REMOVE FROM DOM) call/hang buttons and "calling..." text

  iscalling y phoneNumber van a context junto con sus modificaciones
