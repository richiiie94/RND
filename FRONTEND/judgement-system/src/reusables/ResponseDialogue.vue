<template>
    <popup-modal ref="popup">
        <v-alert
            elevation="2"
            :colored-border="colored_border"
            :border="border"
            :type="type">
            {{ message }}
        </v-alert>

        <div class="btns">
            <v-btn class="btn-primary pa-2" @click="close" style="width: auto">{{ closeButton }}</v-btn>
        </div>
    </popup-modal>
</template>

<script>
import PopupModal from './PopUpModal'

export default {
    name: 'ResponseDialogue',

    components: { PopupModal },

    data: () => ({
        // Parameters that change depending on the type of dialogue
        message: '', // Main text content
        closeButton: 'OK', // text for cancel button

        colored_border: false,
        border: undefined,
        type: '',
        // Private variables
        resolvePromise: undefined,
        rejectPromise: undefined,
    }),

    methods: {
        show(opts = {}) {
            if ('message' in opts) {
                this.message = opts['message']
            }

            if ('closeButton' in opts) {
                this.closeButton = opts['closeButton']
            }

            if ('colored_border' in opts) {
                this.colored_border = opts['colored_border']
            }

            if ('type' in opts) {
                this.type = opts['type']
            }
            // Once we set our config, we tell the popup modal to open
            this.$refs.popup.open()
            // Return promise so the caller can get results
            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve
                this.rejectPromise = reject
            })
        },

        close() {
            this.$refs.popup.close()
            this.resolvePromise(false)
            // Or you can throw an error
            // this.rejectPromise(new Error('User cancelled the dialogue'))
        },
    },
}
</script>

<style scoped>
.btns {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 8px;
}
</style>