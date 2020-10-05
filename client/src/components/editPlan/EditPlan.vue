<template>
    <section class="edit-plan">
        <PlansHeader
            :title="'Customise your plan'"
            :step="step"
            @back="$emit('back')"
        />
        <v-row>
            <v-col sm="3">
                <img src="@/assets/editPlanImage.svg" alt="edit plan image" />
            </v-col>
            <v-col sm="9">
                <v-row>
                    <v-col sm="6" class="info-text">Your plan:</v-col>
                    <v-col sm="6"></v-col>
                </v-row>
                <v-row>
                    <v-col xs="12" sm="5"
                        ><span class="plan-title">{{ tmpCurrentPlan.name }}</span
                        ><span class="font__price"
                            ><sub>$</sub>{{ tmpCurrentPlan.cost }}</span
                        ></v-col
                    >
                    <v-col xs="12" sm="6">
                        <v-row>
                            <v-col sm="7"
                                ><a @click="saveAsCustom" href="#" class="yellow-link"
                                    >Save as custom box</a
                                ></v-col
                            >
                            <v-col sm="5"
                                ><a href="#" @click="$emit('back')" class="yellow-link"
                                    >Change plan</a
                                ></v-col
                            >
                        </v-row>
                    </v-col>
                    <v-col sm="1"></v-col>
                </v-row>
                <v-row>
                    <v-col sm="6" class="info-text">Benefits:</v-col>
                    <v-col sm="6"></v-col>
                </v-row>
                <v-row>
                    <v-col sm="10" class="benefits-container">
                        <v-row
                            v-for="item in benefits"
                            class="benefits-item"
                            :key="item.id"
                        >
                            <v-col sm="2">
                                <img
                                    :src="item.image"
                                    :alt="item.name"
                                />
                            </v-col>
                            <v-col sm="7">{{ item.name }}</v-col>
                            <v-col sm="1"
                                ><v-checkbox
                                    color="#EFB60F"
                                    v-model="item.checked"
                                    @change="onCheckBoxChange(item.checked, item.cost)"
                            ></v-checkbox>
                            </v-col>
                            <v-col sm="2"> </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col sm="12">
                        <v-row class="benefits-item">
                            <v-col sm="1">
                                <img
                                    :src="
                                        require(`@/assets/plans/benefits/${resubscribePeriod.img}`)
                                    "
                                    alt="resubscribePeriod.name"
                                />
                            </v-col>
                            <v-col sm="4" class="edit-plan__bottom-text">{{
                                resubscribePeriod.name
                            }}</v-col>
                            <v-col sm="3">
                                <v-select
                                    outlined
                                    width="162"
                                    height="40"
                                    :items="resubscribePeriod.periods"
                                    v-model="resubscribePeriodValue"
                                ></v-select>
                            </v-col>
                            <v-col sm="4"></v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <div class="d-flex justify-end align-center my-7">
            <span class="mr-2">Updated price:</span>
            <span class="font__price"><sub>$</sub>{{ tmpCost }}</span>
        </div>
        <v-row>
            <v-btn
                    v-if="step !== 1"
                    rounded
                    outlined
                    color="#efb60f"
                    width="170"
                    height="52"
                    depressed
                    class="custom-btn custom-btn--checkout ml-auto"
                    @click="updateCardHandler"
            >
                Save Changes
            </v-btn>
            <v-btn
                    v-if="step !== 1"
                    rounded
                    outlined
                    color="#1D2025"
                    width="170"
                    height="52"
                    depressed
                    class="custom-btn custom-btn--back ml-4"
                    @click="$emit('back')"
            >
                Cancel and Back
            </v-btn>
        </v-row>
    </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import PlansHeader from "@/components/plans/PlansHeader";
import box from '@/assets/plans/benefits/box.svg';
import edit from '@/assets/plans/benefits/edit.svg';
import money_back from '@/assets/plans/benefits/money_back.svg';
import clock_icon from '@/assets/plans/benefits/clock_icon.svg';
export default {
    name: "EditPlan",
    components: {
        PlansHeader,
    },
    props: {
        step: {
            type: Number,
            default: null,
        },
        selectedPlanId: {
            type: String,
            default: '',
        },
    },
    computed: {
        ...mapState({
            plansData: state => state.plansData
        }),
    },
    data: () => ({
        tmpCost: null,
        tmpCurrentPlan: {},
        resubscribePeriodValue: '',
        benefits: [
            {
                image: box,
                name: "Free shipping",
                cost: 20,
                checked: false
            },
            {
                image: edit,
                name: "Free edit plan",
                cost: 20,
                checked: false
            },
            {
                image: edit,
                name: "Free changing",
                cost: 29,
                checked: false
            },
            {
                image: money_back,
                name: "Money back",
                cost: 3,
                checked: false
            },
            {
                image: clock_icon,
                name: "Rough hours shipping",
                cost: 3,
                checked: false
            },
            {
                image: box,
                name: "Free shipping + bonus",
                cost: 4,
                checked: false
            },
            {
                image: edit,
                name: "Free edit plan + bonus",
                cost: 5,
                checked: false
            },
            {
                image: edit,
                name: "Free changing + bonus",
                cost: 5,
                checked: false
            },
            {
                image: money_back,
                name: "Money back + bonus",
                cost: 10,
                checked: false
            },
            {
                image: clock_icon,
                name: "Rough hours shipping + bonus",
                cost: 10,
                checked: false
            },
        ],
        resubscribePeriod: {
            img: "clock_icon.svg",
            name: "want to receive a given box with",
            periods: ["every 1 months", "every 2 months", "every 3 months"],
        },
    }),
    created() {
        let item = this.plansData.find(item => item.id === this.selectedPlanId);
        this.tmpCurrentPlan = JSON.parse(JSON.stringify(item));
        this.benefits.forEach((item, index) => {
            let isFind = this.tmpCurrentPlan.benefits.findIndex(currentItem => currentItem.name === item.name)
            if (isFind !== -1) {
                this.benefits[index].checked = true
            }
        });
        this.resubscribePeriodValue = this.tmpCurrentPlan.resubscribePeriod;
        this.tmpCost = this.tmpCurrentPlan.cost
    },
    methods: {
        ...mapMutations({
            updateCard: 'updateCard',
            saveCustomPlan: 'saveCustomPlan'
        }),
        onCheckBoxChange(checked, cost) {
            checked ? this.tmpCost += cost : this.tmpCost -= cost
        },
        updateCardHandler() {
            this.tmpCurrentPlan.benefits = this.benefits.filter(item => item.checked);
            this.tmpCurrentPlan.cost = this.tmpCost;
            this.updateCard(this.tmpCurrentPlan);
            this.$emit('save-changes')
        },
        saveAsCustom() {
            this.tmpCurrentPlan.benefits = this.benefits.filter(item => item.checked);
            this.tmpCurrentPlan.cost = this.tmpCost;
            this.tmpCurrentPlan.id += '1';
            this.saveCustomPlan(this.tmpCurrentPlan);
            this.$emit('save-changes')
        }
    }
};
</script>

<style>
</style>
