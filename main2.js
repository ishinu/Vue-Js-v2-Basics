Vue.component('task-list',{
    template : `
        <div>
            <task v-for ="task in tasks">{{ task.task }}</task>
        </div>
    `,
    data(){
        return{
            tasks : [
                { task : 'Go to the Store', complete : true },
                { task : 'Go to the Bank', complete : false },
                { task : 'Go to the School', complete : true },
                { task : 'Go to the Jungle', complete : false }
            ]
        };
    }
});

Vue.component('task',{
    template :  '<li><slot></slot></li>'
});

new Vue({
    el:'#root'
});
