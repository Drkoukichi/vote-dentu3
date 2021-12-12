function votedate (rawvote: number) {
    a = 0
    a = rawvote - 10
    return a
}

function checkvoted (a:number){
    let b = 0 
    for(let i= 0; i<votemenber.length;i++){
        if(votemenber[i]==a){
            b++
        }
    }
    if(b==0){
        votemenber.push(a)
        votelist[rastvote]++
    }
}
input.onButtonPressed(Button.B, function () {
    if (cmode) {
        mode += 1
    }
    cmode = false
})
radio.onReceivedNumber(function (name) {
    if (mode == 1) {
        checkvoted(radio.receivedPacket(RadioPacketProperty.SerialNumber))
        rastvote = name   
    }
})
let i = 0
let mode = 0
let cmode = false
let a = 0
let rastvote = 0
radio.setGroup(25)
a = 2
cmode = true
let votelist = [0,0,0,0,0]
let votenom = ["A","B","C","D","E"]

let votemenber = [0]
// 桁数の送信
while (mode == 0) {
    i = 2
    if (input.buttonIsPressed(Button.A)) {
        a += 1
    }
    if (a == 6) {
        a = 2
    }
    basic.showNumber(a)
}
mode = 1
radio.sendNumber(a)
music.playMelody("E", 120)
basic.clearScreen()
// 初期設定の完了
basic.forever(function () {
    cmode = true
    if (mode == 1) {
        basic.showString("Vnow")
    } else {
        basic.showString("END")
        cmode = false
        for(i=0;i<a;i++){
            basic.showString(votenom[i])
            basic.pause(1000)
            basic.showNumber(votelist[i])
            basic.pause(1000)
        }
    }
})
