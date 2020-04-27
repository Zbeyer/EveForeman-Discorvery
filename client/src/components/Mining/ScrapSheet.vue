<template>
    <div>
        <div>
            {{ helloWorld }}
        </div>

        <v-card dark align="center">
            <v-form v-model="valid">
                <v-container>
                    <v-layout>
                        <v-text-field v-model="pilotName" :rules="nameRules" :counter="40" label="Pilot Name" required>
                        </v-text-field>

                        <v-text-field v-model="ship" :rules="nameRules" :counter="40" label="Ship" required>
                        </v-text-field>

                        <v-text-field v-model="amount" :rules="numbers" :counter="10" label="Amount (m3)" required>
                        </v-text-field>

                        <v-text-field v-model="cycleTime" :rules="numbers" :counter="3" label="Cycle Time" required>
                        </v-text-field>
                        <v-label>
                            {{ vps }}
                        </v-label>
                    </v-layout>
                </v-container>
            </v-form>
        </v-card>

        <div id="example">
            <p>Original message: "{{ message }}"</p>
            <p>Computed reversed message: "{{ reversedMessage }}"</p>
        </div>

        <content-card pic="https://vuejsexamples.com/favicon.png" type="security" title="W.I.P." subtitle="Scrap Sheet"
            footnote="Work in progress" v-if="0"
            body="This page is a work in progress. While it may be visually interesting nothing yet is functional so please don't be too disappointed by aparent lack of functionality." />

        <v-card light align="center" v-if="0">
            <v-sparkline :value="value" :gradient="gradient" :smooth="radius || false" :padding="padding"
                :line-width="width" :stroke-linecap="lineCap" :gradient-direction="gradientDirection" :fill="fill"
                :type="type" :auto-line-width="autoLineWidth" auto-draw />
            <v-form v-model="valid">
                <div class="text-center">
                    <!-- <span v-for="n in numbers">
                        <v-progress-circular :value="n" class="ma-1" color="teal" />
                    </span> -->
                </div>
                <v-calendar dark />
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="oppName" :rules="nameRules" :counter="80" label="Operation"
                                required />
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" md="4">
                            <v-date-picker v-model="datePicker" class="ma-4" scrollable show-current color="teal" dark
                                landscape />
                        </v-col>
                        <v-col cols="12" md="4">
                            <span class="content-subtitle">{{datePicker}}</span>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="12" md="4">
                            <v-time-picker v-model="timePicker" format="24hr" scrollable color="teal" dark landscape />
                        </v-col>
                        <v-col cols="12" md="4">
                            <span class="content-subtitle">{{timePicker}}</span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-select v-model="select" :items="items" :error-messages="selectErrors" label="Item"
                                required @change="$v.select.$touch()" @blur="$v.select.$touch()"></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="4">

                            <v-btn class="mr-4" @click="submit">submit</v-btn>
                            <v-btn @click="clear">clear</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
            <v-row justify="space-around">
                <v-switch v-model="row" class="mx-2" label="Row"></v-switch>
                <v-switch v-model="valid" class="ma-4" label="Valid" readonly></v-switch>
                <v-switch v-model="lazy" class="ma-4" label="Lazy"></v-switch>
            </v-row>
        </v-card>
    </div>
</template>

<script>
    import Mining from '@/services/Mining'
    import ContentCard from '@/components/Generics/ContentCard'
    const gradients = [
        ['#222'],
        ['#42b3f4'],
        ['red', 'orange', 'yellow'],
        ['purple', 'violet'],
        ['#00c6ff', '#F0F', '#FF0'],
        ['#f72047', '#ffd200', '#1feaea']
    ]
    export default {
        name: 'ScrapSheet',
        data () {
            return {
                helloWorld: Mining.helloWorld(),
                numbers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                datePicker: '',
                timePicker: '',
                width: 2,
                radius: 10,
                padding: 8,
                lineCap: 'round',
                gradient: gradients[5],
                value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
                gradientDirection: 'top',
                gradients,
                fill: false,
                type: 'trend',
                autoLineWidth: false,
                message: 'Hello',
                amount: '',
                cycleTime: ''
            }
        },
        components: {
            'content-card': ContentCard
        },
        computed: {
            // a computed getter
            reversedMessage: function () {
                // `this` points to the vm instance
                return this.message.split('').reverse().join('')
            },
            vps: function () {
                return Mining.volumePerSecond(this.amount, this.cycleTime)
            }
        }

    }

</script>

<style>

</style>
