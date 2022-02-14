<template>
    <v-snackbar
        :id="elementId + '-snackbar-reusablesnackbar'"
        v-model="snackbar"
        :timeout="timeout"
        :top="top"
        :bottom="bottom"
        :left="left"
        :right="right"
        :color="color"
        :outlined="outlined"
        :elevation="elevation"
        :height="height"
        :width="width"
        :min-height="minHeight"
        :min-width="minWidth"
        :max-height="maxHeight"
        :max-width="maxWidth"
        :vertical="vertical">
        {{ message }}
        <template v-if="showBtn" v-slot:action="{ attrs }">
            <v-btn :id="elementId + '-button-reusablesnackbar'" :color="btnColor" v-bind="attrs" @click="snackbar = false" class="btn-secondary" style="width: auto;" depressed>
                {{ btnText }}
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    name: 'SnackBar',
    props: {
        elementId: { type: String, default: '' },
        top: { type: Boolean, default: false },
        bottom: { type: Boolean, default: false },
        left: { type: Boolean, default: false },
        right: { type: Boolean, default: false },
        message: { type: String, default: '' },
        timeout: { type: Number, default: -1 },
        color: { default: undefined },
        outlined: { type: Boolean, default: false },
        elevation: { default: undefined },
        height: { default: undefined },
        width: { default: undefined },
        minHeight: { default: undefined },
        minWidth: { default: undefined },
        maxHeight: { default: undefined },
        maxWidth: { default: undefined },
        vertical: { type: Boolean, default: false },
        showBtn: { type: Boolean, default: false },
        btnText: { type: String, default: 'Close' },
        btnColor: { default: undefined },
    },

    data: () => ({
        snackbar: false,
    }),

    methods: {
        show(opts = {}) {
            this.snackbar = true
        },

        close() {
            this.snackbar = false
            this.resetData()
        },

        resetData() {
            this.top = false
            this.bottom = false
            this.left = false
            this.right = false
            this.message = ''
            this.timeout = -1
            this.color = undefined
            this.outlined = false
            this.elevation = undefined
            this.height = undefined
            this.width = undefined
            this.minHeight = undefined
            this.minWidth = undefined
            this.maxHeight = undefined
            this.maxWidth = undefined
            this.vertical = false
            this.showBtn = false
            this.btnText = 'Close'
            this.btnColor = undefined
        },
    },
};
</script>