let a = 0
let b = 0
let N = 0
function 燈號_16 (num: number) {
    if (num < 6) {
        a = num - 1
        b = 0
    } else if (6 <= num && num < 10) {
        a = 4
        b = num - 5
    } else if (10 <= num && num < 14) {
        a = 13 - num
        b = 4
    } else {
        a = 0
        b = 17 - num
    }
}
input.onButtonPressed(Button.A, function () {
    for (let N_0 = 0; N_0 <= 16; N_0++) {
        N = N_0 + 1
        燈號_16(N)
        led.plot(a, b)
        燈號_16(N - 1)
        led.unplot(a, b)
        basic.pause(100)
    }
})
function 燈號_25 (num: number) {
    if (num < 6) {
        a = num - 1
        b = 0
    } else if (6 <= num && num < 10) {
        a = 4
        b = num - 5
    } else if (10 <= num && num < 14) {
        a = 13 - num
        b = 4
    } else if (14 <= num && num < 17) {
        a = 0
        b = 17 - num
    } else if (17 <= num && num < 20) {
        a = num - 16
        b = 1
    } else if (20 <= num && num < 22) {
        a = 3
        b = num - 18
    } else if (22 <= num && num < 24) {
        a = 24 - num
        b = 3
    } else if (num == 24) {
        a = 1
        b = 26 - num
    } else {
        a = 2
        b = 2
    }
}
input.onButtonPressed(Button.AB, function () {
    for (let N_0 = 0; N_0 <= 24; N_0++) {
        N = N_0 + 1
        燈號_25(N)
        led.plot(a, b)
        basic.pause(200)
    }
    for (let N_0 = 0; N_0 <= 24; N_0++) {
        N = 25 - N_0
        燈號_25(N)
        led.unplot(a, b)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let N_0 = 0; N_0 <= 16; N_0++) {
        N = N_0 + 1
        燈號_16(N)
        led.plot(b, a)
        燈號_16(N - 1)
        led.unplot(b, a)
        basic.pause(100)
    }
})
