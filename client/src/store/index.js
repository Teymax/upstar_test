import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        auth: {
            token: "",
            user: {}
        },
        orderNumber: 342534636,
        activePlanId: "",
        usersCount: 245,
        plansData: [
            {
                id: "1111",
                isActivePlan: false,
                freeShippingFrom: 900,
                planCardImage: "",
                img: require('@/assets/plans/plans-item/0.svg'),
                name: "single",
                description: "small family",
                cost: 69,
                products: [
                {
                    id: '1',
                    img: '4.jpg',
                    title: 'Smart LED system',
                    description: 'is simply dummy text of the printing and typesetting industry.',
                    price: 111.99,
                    count: 2
                },
                {
                    id: '2',
                    img: '5.jpg',
                    title: 'large',
                    description: 'is simply dummy text of the printing and typesetting industry.',
                    price: 222.22,
                    count: 2
                },
                {
                    id: '3',
                    img: '6.jpg',
                    title: 'Termo cam',
                    description: 'is simply dummy text of the printing and typesetting industry.',
                    price: 333.11,
                    count: 2
                },
                {
                    id: '4',
                    img: '7.jpg',
                    title: 'companies',
                    description: 'is simply dummy text of the printing and typesetting industry.',
                    price: 321.121,
                    count: 2
                }
            ],
                resubscribePeriod: "every 3 months",
                benefits: [
                    {
                        image: require('@/assets/plans/benefits/box.svg'),
                        name: "Free shipping",
                        cost: 20
                    },
                    {
                        image: require('@/assets/plans/benefits/edit.svg'),
                        name: "Free edit plan",
                        cost: 20
                    },
                    {
                        image: require('@/assets/plans/benefits/edit.svg'),
                        name: "Free changing",
                        cost: 29
                    }
                ],
                planCartItems: [
                    {
                        name: "Smart LED system",
                        cost: "245.99",
                        description:
                            "is simply dummy text of the printing and typesetting industry.",
                        count: "0"
                    },
                    {
                        name: "Smart LED system",
                        cost: "115.00",
                        description:
                            "is simply dummy text of the printing and typesetting industry.",
                        count: "0"
                    },
                    {
                        name: "Termo cam",
                        cost: "87.99",
                        description:
                            "is simply dummy text of the printing and typesetting industry.",
                        count: "0"
                    },
                    {
                        name: "Smart LED system",
                        cost: "45.44",
                        description:
                            "is simply dummy text of the printing and typesetting industry.",
                        count: "0"
                    }
                ]
            },
            {
                id: "2222",
                isActivePlan: false,
                freeShippingFrom: 600,
                planCardImage: "",
                img: require('@/assets/plans/plans-item/1.svg'),
                name: "large",
                description: "large family",
                cost: 79,
                products: [
                {
                    id: '1',
                    img: '4.jpg',
                    title: 'Smart LED system',
                    description: 'is simply dummy text of the printing and typesetting industry.',
                    price: 111.99,
                    count: 2
                },
                {
                    id: '2',
                    img: '5.jpg',
                    title: 'large',
                    description: 'is simply dummy text of the printing and typesetting industry.',
                    price: 222.22,
                    count: 2
                },
                {
                    id: '3',
                    img: '6.jpg',
                    title: 'Termo cam',
                    description: 'is simply dummy text of the printing and typesetting industry.',
                    price: 333.11,
                    count: 2
                },
                {
                    id: '4',
                    img: '7.jpg',
                    title: 'companies',
                    description: 'is simply dummy text of the printing and typesetting industry.',
                    price: 321.121,
                    count: 2
                }
            ],
                resubscribePeriod: "every 2 months",
                benefits: [
                    {
                        image: require('@/assets/plans/benefits/box.svg'),
                        name: "Free shipping",
                        cost: 20
                    },
                    {
                        image: require('@/assets/plans/benefits/edit.svg'),
                        name: "Free edit plan",
                        cost: 20
                    },
                    {
                        image: require('@/assets/plans/benefits/edit.svg'),
                        name: "Free changing",
                        cost: 29
                    },
                    {
                        image: require('@/assets/plans/benefits/money_back.svg'),
                        name: "Money back",
                        cost: 3
                    },
                    {
                        image: require('@/assets/plans/benefits/clock_icon.svg'),
                        name: "Rough hours shipping",
                        cost: 3
                    },
                    {
                        image: require('@/assets/plans/benefits/box.svg'),
                        name: "Free shipping + bonus",
                        cost: 4
                    }
                ],
                planCartItems: [
                    {
                        name: "Smart LED system",
                        cost: "245.99",
                        description:
                            "is simply dummy text of the printing and typesetting industry.",
                        count: "0"
                    },
                    {
                        name: "Smart LED system",
                        cost: "115.00",
                        description:
                            "is simply dummy text of the printing and typesetting industry.",
                        count: "0"
                    },
                    {
                        name: "Termo cam",
                        cost: "87.99",
                        description:
                            "is simply dummy text of the printing and typesetting industry.",
                        count: "0"
                    },
                    {
                        name: "Smart LED system",
                        cost: "45.44",
                        description:
                            "is simply dummy text of the printing and typesetting industry.",
                        count: "0"
                    }
                ]
            },
            {
                id: "3333",
                isActivePlan: false,
                freeShippingFrom: 300,
                planCardImage: "",
                img: require('@/assets/plans/plans-item/2.svg'),
                name: "companies",
                description: "large family",
                cost: 99,
                products: [
                {
                    id: '1',
                    img: '4.jpg',
                    title: 'Smart LED system',
                    description: 'is simply dummy text of the printing and typesetting industry.',
                    price: 111.99,
                    count: 2
                },
                {
                    id: '2',
                    img: '5.jpg',
                    title: 'large',
                    description: 'is simply dummy text of the printing and typesetting industry.',
                    price: 222.22,
                    count: 2
                },
                {
                    id: '3',
                    img: '6.jpg',
                    title: 'Termo cam',
                    description: 'is simply dummy text of the printing and typesetting industry.',
                    price: 333.11,
                    count: 2
                },
                {
                    id: '4',
                    img: '7.jpg',
                    title: 'companies',
                    description: 'is simply dummy text of the printing and typesetting industry.',
                    price: 321.121,
                    count: 2
                }
            ],
                resubscribePeriod: "every 1 months",
                benefits: [
                    {
                        image: require('@/assets/plans/benefits/box.svg'),
                        name: "Free shipping",
                        cost: 20
                    },
                    {
                        image: require('@/assets/plans/benefits/edit.svg'),
                        name: "Free edit plan",
                        cost: 20
                    },
                    {
                        image: require('@/assets/plans/benefits/edit.svg'),
                        name: "Free changing",
                        cost: 29
                    },
                    {
                        image: require('@/assets/plans/benefits/money_back.svg'),
                        name: "Money back",
                        cost: 3
                    },
                    {
                        image: require('@/assets/plans/benefits/clock_icon.svg'),
                        name: "Rough hours shipping",
                        cost: 3
                    },
                    {
                        image: require('@/assets/plans/benefits/box.svg'),
                        name: "Free shipping + bonus",
                        cost: 4
                    },
                    {
                        image: require('@/assets/plans/benefits/edit.svg'),
                        name: "Free edit plan + bonus",
                        cost: 5
                    },
                    {
                        image: require('@/assets/plans/benefits/edit.svg'),
                        name: "Free changing + bonus",
                        cost: 5
                    },
                    {
                        image: require('@/assets/plans/benefits/money_back.svg'),
                        name: "Money back + bonus",
                        cost: 10
                    }
                ],
                planCartItems: [
                    {
                        name: "Smart LED system",
                        cost: "245.99",
                        description:
                            "is simply dummy text of the printing and typesetting industry.",
                        count: "0"
                    },
                    {
                        name: "Smart LED system",
                        cost: "115.00",
                        description:
                            "is simply dummy text of the printing and typesetting industry.",
                        count: "0"
                    },
                    {
                        name: "Termo cam",
                        cost: "87.99",
                        description:
                            "is simply dummy text of the printing and typesetting industry.",
                        count: "0"
                    },
                    {
                        name: "Smart LED system",
                        cost: "45.44",
                        description:
                            "is simply dummy text of the printing and typesetting industry.",
                        count: "0"
                    }
                ]
            }
        ]
    },
    getters: {
        currentPlan(state) {
          return state.plansData.find(item => state.activePlanId === item.id)
      }
    },
    mutations: {
        setToken(state, token) {
            state.auth.token = token;
        },
        setUser(state, user) {
            state.auth.user = user;
        },
        removeAuth(state) {
            state.auth = {
                token: "",
                user: {}
            };
        },
        checkout(state, plan) {
            let index = state.plansData.findIndex(item => item.id === plan.id);
            state.activePlanId = plan.id;
            state.plansData[index] = plan;
        },
        updateCard(state, payload) {
            console.log(payload, 'payload');
            let index = state.plansData.findIndex(item => item.id === payload.id)
            state.plansData[index] = {
                updated: true,
                ...payload
            }
        },
        saveCustomPlan(state, plan) {
            let customItemIndex = state.plansData.findIndex(item => item.custom)
            if (customItemIndex !== -1) {
                state.plansData.splice(customItemIndex, 1, {
                    custom: true,
                    ...plan
                })
            } else {
                state.plansData.push({
                    custom: true,
                    ...plan
                })
            }
        }
    }
});
