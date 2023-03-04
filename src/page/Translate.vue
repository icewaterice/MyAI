<template>
    <div class="translate-main grow mx1" >
        <w-flex justify-center align-center class="wrapper">
        <div class="translate xs12 pa1">
            <w-flex wrap gap="8" column align-center justify-end class="wrapper">
                <div class="need box xs12 pa1">
                    <w-card shadow class="need-kid box bdrs5" height="10em">
                        <p>
                            {{ inputText }}
                        </p>
                    </w-card>
                </div>
                <div class="submit box xs12 pa1 align-self-end">
                    <w-flex wrap gap="8" column align-center justify-end class="wrapper">
                        <div class="text box xs12 pa1">
                            <w-textarea v-model="inputText" height="12em" class="mt6" outline shadow>
                                    输入需翻译的文本
                            </w-textarea>
                        </div>
                        <div class="select">
                            <w-select :items="items" outline>需要翻译的语言</w-select>
                        </div>
                        <div class="confirm box ">
                            <w-button width="12em" height="4em" class="ma1 grow " bg-color="success" @click="PrintHello()">翻译</w-button>
                        </div>
                    </w-flex>
                </div>
                
                
            </w-flex>
        </div>
    </w-flex>
    </div>
</template>

<script>
import { getCurrentInstance,onMounted } from 'vue';



export default{
    data(){
        return {
            text: 'ss',
            inputText: '',
            items: [
                { label: '英语' },
                { label: '中文' },
                { label: '日语' }
            ]
        }
    },
    setup(){
        const { proxy } = getCurrentInstance();

        onMounted(() => {

        });

        function PrintHello(){
            inputText = "hello"
        }
    },
    methods:{
        PrintHello(){
            this.inputText = "hellow"
        }
    }
}

</script>

<style>
.translate-main{
    margin-top: 40px;
}
.need{
    height: 25vh;
    
}
.need-kid{
        height: 100%;
    }
</style>