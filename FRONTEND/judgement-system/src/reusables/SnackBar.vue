<template>
    <v-snackbar
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
            <v-btn :color="btnColor" text v-bind="attrs" @click="snackbar = false">
                {{ btnText }}
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    name: 'SnackBar',

    data: () => ({
        snackbar: false,
        message: '',
        timeout: -1,
        top: false,
        bottom: false,
        left: false,
        right: false,
        color: undefined,
        outlined: false,
        elevation: undefined,
        height: undefined,
        width: undefined,
        minHeight: undefined,
        minWidth: undefined,
        maxHeight: undefined,
        maxWidth: undefined,
        vertical: false,
        showBtn: false,
        btnText: 'CLOSE',
        btnColor: undefined,
    }),

    methods: {
        show(opts = {}) {
            if ('styles' in opts) {
                if ('color' in opts['styles']) {
                    this.color = opts['styles']['color']
                }

                if ('top' in opts['styles']) {
                    this.top = opts['styles']['top']
                }

                if ('bottom' in opts['styles']) {
                    this.bottom = opts['styles']['bottom']
                }

                if ('left' in opts['styles']) {
                    this.left = opts['styles']['left']
                }

                if ('right' in opts['styles']) {
                    this.right = opts['styles']['right']
                }

                if ('outlined' in opts['styles']) {
                    this.outlined = opts['styles']['outlined']
                }

                if ('elevation' in opts['styles']) {
                    this.elevation = opts['styles']['elevation']
                }

                if ('height' in opts['styles']) {
                    this.height = opts['styles']['height']
                }

                if ('width' in opts['styles']) {
                    this.width = opts['styles']['width']
                }

                if ('minHeight' in opts['styles']) {
                    this.minHeight = opts['styles']['minHeight']
                }

                if ('minWidth' in opts['styles']) {
                    this.minWidth = opts['styles']['minWidth']
                }

                if ('maxHeight' in opts['styles']) {
                    this.maxHeight = opts['styles']['maxHeight']
                }

                if ('maxWidth' in opts['styles']) {
                    this.maxWidth = opts['styles']['maxWidth']
                }

                if ('vertical' in opts['styles']) {
                    this.vertical = opts['styles']['vertical']
                }
            }

            if ('timeout' in opts) {
                this.timeout = opts['timeout']
            }

            if ('message' in opts) {
                this.message = opts['message']
            }

            if ('showBtn' in opts) {
                this.showBtn = opts['showBtn']
            }

            if ('btnText' in opts) {
                this.btnText = opts['btnText']
            }

            if ('btnColor' in opts) {
                this.btnColor = opts['btnColor']
            }

            this.snackbar = true
        },
    },
};
</script>