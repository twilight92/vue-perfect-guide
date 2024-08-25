function getRandomValue(min, max) {
    // 최소값과 최대값 사이의 임의의 숫자 반환
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            mosterHealth: 100,
            currentRound: 0,
        };
    },
    computed: {
        monsterBarStyles() {
            return { width: this.mosterHealth + '%' }
        },
        playerBarStyles() {
            return { width: this.playerHealth + '%' }
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;

            const attackValue = getRandomValue(5, 12);
            this.mosterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            const attackValue = getRandomValue(10, 25);
            this.mosterHealth -= attackValue;
            this.attackPlayer();
        }
    }
});

app.mount('#game');