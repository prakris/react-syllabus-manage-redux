data : {
    11: {
            subs:['physics', 'maths'],
              syll:{
                    physics:[{
                              chap : {
                                id: 1, name:'Nuclear Theory',
                                topics:[
                                        { id : 1, name:'Nuclear Structure'}
                                        ]},
                              chap2 : {
                                id: 2, name:'Atomic Theory',
                                topics:[
                                        { id : 2, name:'Atomic  Structure'}
                                        ]}
                          }],
                    maths:[{
                          chap : {
                            id: 1, name:'stats',
                            topics:[
                                    {id: 1, name:'Number System'}
                                    ]},
                          chap2 : {
                            id: 2, name:'integration',
                            topics:[
                                    {id: 2, name:'partial integration'}
                                    ]}         
                        }],       
                }
          },
      12: {
        subs:['Hindi','English','Chemistry'],
          syll:{
                Hindi:[{
                          chap : {
                            id: 1, name:'Kabir ke Dohe',
                            topics:[
                                    { id : 1, name:'Doha'}
                                    ]},
                          chap2 : {
                            id: 2, name:'Karma',
                            topics:[
                                    { id : 2, name:'krma1'}
                                    ]}
                      }],
             English:[{
                      chap : {
                        id: 1, name:'opposite word',
                        topics:[
                                {id: 1, name:'negative'}
                                ]},
                      chap2 : {
                        id: 2, name:'same word',
                        topics:[
                                {id: 2, name:'positive'}
                                ]}         
                    }],  
       chemistry:[{
                      chap : {
                        id: 1, name:'organic',
                        topics:[
                                { id : 1, name:'organic Structure'}
                                ]},
                      chap2 : {
                        id: 2, name:'inorganic',
                        topics:[
                                { id : 2, name:'inorganic  Structure'}
                                ]}
                  }],       
            }
      }
  }
              };
 }


 const { standard }= this.state;

    let standardList = standard.length>0 && standard.map((item,i)=>
    {
      return (
        <option key={i} value={item.id}>{item.id}</option>
      )
    });