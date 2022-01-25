<template>
    <popup-modal ref="popup">
        <h2 style="margin-top: 0">{{ title }}</h2>
        <p style="text-align: center">{{ message }}</p>
        <div class="btns">
            <v-btn class="btn-text pa-2" @click="cancel">{{ cancelButton }}</v-btn>
            <v-btn class="btn-primary pa-2" @click="confirm" style="width: auto">{{ okButton }}</v-btn>
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
        title: '',
        message: '', // Main text content
        okButton: 'Yes', // Text for confirm button; leave it empty because we don't know what we're using it for
        cancelButton: 'No', // text for cancel button
        
        // Private variables
        resolvePromise: undefined,
        rejectPromise: undefined,
    }),

    methods: {
        show(opts = {}) {
            if ('title' in opts) {
                this.title = opts.title;
            }

            if ('message' in opts) {
                this.message = opts.message;
            }

            if ('okButton' in opts) {
                this.okButton = opts.okButton;
            }

            if ('cancelButton' in opts) {
                this.cancelButton = opts.cancelButton
            }
            // Once we set our config, we tell the popup modal to open
            this.$refs.popup.open()
            // Return promise so the caller can get results
            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve
                this.rejectPromise = reject
            })
        },

        confirm() {
            this.$refs.popup.close()
            this.resolvePromise(true)
        },

        cancel() {
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
    justify-content: space-between;
    gap: 8px;
}
</style>