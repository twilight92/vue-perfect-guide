function getRandomValue(min, max) {
    // 최소값과 최대값 사이의 임의의 숫자 반환
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            mosterHealth: 100,
        };
    },
    computed: {
        monsterBarStyles() {
            return { width: this.mosterHealth + '%' }
        },
        playerBarStyles() {
            return { width: this.playerHealth + '%' }
        }
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(5, 12);
            this.mosterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        }
    }
});

app.mount('#game');