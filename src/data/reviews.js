const reviews = [
    {
        id: 236,
        date: "2021-02-15T05:29:53.293Z",
        status: "accepted",
        command_id: 1,
        product_id: 1,
        customer_id: 1,
        rating: 3,
        comment:
            "Magnam molestiae et non non recusandae. Enim ratione ipsam.\n \nOdit impedit nostrum commodi deleniti doloremque. Accusamus rerum pariatur explicabo ex autem et.\n \nCumque cumque sint doloribus quo et autem unde. Omnis itaque dolore sunt omnis et placeat.\n \nConsectetur omnis velit nulla voluptatem. Eius voluptatibus nesciunt distinctio enim esse. Est quia nihil enim voluptatibus velit quaerat ipsum praesentium voluptas. Explicabo quia qui deleniti voluptatem maiores. Officia tenetur est aut distinctio optio.\n \nUllam vel quos et reprehenderit eum deleniti rem nemo. Ipsa ullam quibusdam nesciunt culpa mollitia est et. Aspernatur officiis ullam eius. Laudantium qui libero quia illo quae fugiat saepe officiis. Qui quia aut impedit atque earum ipsa eveniet nihil et.",
    },
    {
        id: 191,
        date: "2021-02-14T15:42:37.255Z",
        status: "pending",
        command_id: 343,
        product_id: 49,
        customer_id: 534,
        rating: 3,
        comment:
            "Et voluptas iure amet fugiat qui sint quia. Voluptas nam culpa et fuga quis voluptatem et itaque eum. Harum dolorum sint enim dicta ipsam sit. Veritatis ut neque suscipit suscipit nulla soluta optio consequatur. Quisquam ut dolorem nam odio ratione est. Ipsum dignissimos enim sint quia voluptas.",
    },
    {
        id: 251,
        date: "2021-02-06T21:30:22.927Z",
        status: "accepted",
        command_id: 477,
        product_id: 100,
        customer_id: 580,
        rating: 3,
        comment:
            "Consequatur ducimus quo. Eos qui ipsam aliquam quia quibusdam voluptatibus dicta nisi. Voluptates quod excepturi error.\n \nEt sunt accusamus rerum consequatur voluptates ipsa animi. Praesentium corrupti sequi rerum natus est. Asperiores et sit totam laboriosam quisquam atque. Repellat nisi omnis eum. Quos aut ea aut voluptatum quidem quibusdam debitis.\n \nFacilis aliquam est. Dolor modi facere quia quia harum omnis impedit. Laborum aut tenetur praesentium dolorum. Odio aut amet sunt assumenda ut veniam. Fugit et molestiae labore facilis non fugiat ab velit. Labore error et nam iusto.\n \nNesciunt tempore laboriosam ex expedita odit nulla maiores vel. Veritatis dolor omnis.",
    },
    {
        id: 89,
        date: "2021-01-31T10:20:08.002Z",
        status: "accepted",
        command_id: 161,
        product_id: 22,
        customer_id: 632,
        rating: 4,
        comment:
            "Quia ducimus ut. Recusandae at suscipit quis. Aut accusamus aut excepturi consequatur autem voluptas.\n \nReiciendis tempora repudiandae et tempore minima explicabo. Voluptatem inventore vel praesentium.",
    },
    {
        id: 284,
        date: "2021-01-27T16:25:03.686Z",
        status: "accepted",
        command_id: 522,
        product_id: 129,
        customer_id: 25,
        rating: 5,
        comment:
            "Magnam ea ullam debitis placeat. Qui voluptates minus voluptatum eos magnam. Iure est velit alias expedita. Qui consequatur minus temporibus praesentium adipisci deleniti.\n \nEt eius eaque alias illum dolor est. Corrupti qui odit debitis laudantium quia deserunt aspernatur. Vel sunt omnis qui quibusdam eligendi autem et ut omnis. Debitis velit iusto tenetur aut distinctio.\n \nQui neque cumque dicta molestiae maiores enim aspernatur. Odit culpa vero. Rerum consequuntur id sint voluptas.\n \nAut perferendis magnam quas ut aliquam sit quis id. Et fuga natus explicabo est dolorem esse.",
    },
    {
        id: 306,
        date: "2021-01-26T03:43:54.759Z",
        status: "pending",
        command_id: 573,
        product_id: 30,
        customer_id: 773,
        rating: 3,
        comment:
            "Eum expedita sit eveniet velit eum fuga. Sed laborum consequatur quam distinctio. Est laudantium omnis.\n \nIn accusamus assumenda fugiat animi voluptatum. Rerum eos nesciunt recusandae quasi vitae fugiat. Enim aspernatur nam qui sit non odit dolor debitis. Ut optio a veniam commodi ducimus sit vel quibusdam. Neque ea vel quos voluptate consequatur vitae aperiam. Ipsa inventore qui omnis quibusdam.\n \nPerferendis ea consequatur in. Fugit ut qui iure dolores vel voluptas ea et. Dolor est excepturi neque ex impedit dignissimos illum facere qui. Odit nisi aspernatur esse excepturi nulla excepturi itaque. Nulla id et dolorem voluptatem.\n \nFugit aut error amet laboriosam et quidem labore non. Maxime dolorem quam rerum unde sit animi et. Hic corrupti corporis et saepe aut.",
    },
    {
        id: 259,
        date: "2021-01-25T02:24:13.824Z",
        status: "rejected",
        command_id: 492,
        product_id: 63,
        customer_id: 59,
        rating: 2,
        comment:
            "Facere temporibus quis veritatis. Sapiente voluptatem et a. Aliquam natus ea consequatur enim amet totam. Reprehenderit expedita qui voluptatibus. Pariatur facere in.\n \nRatione occaecati consequatur qui. Aliquid eum placeat qui quas velit quia ut distinctio ex. Odio harum veniam in ullam similique in minima nisi.\n \nConsequuntur rem aut laboriosam consequatur impedit. Doloremque repellendus at possimus. Explicabo et dicta ratione molestiae. Doloribus illo reprehenderit voluptatibus repudiandae impedit ullam doloremque odio. Autem dolorem sit magni inventore impedit corporis quas unde sapiente.",
    },
    {
        id: 217,
        date: "2021-01-17T19:52:17.658Z",
        status: "accepted",
        command_id: 413,
        product_id: 116,
        customer_id: 632,
        rating: 3,
        comment:
            "In eos suscipit mollitia veritatis blanditiis in nostrum veritatis enim. Voluptas sed illo distinctio et. Est quae odio rerum suscipit ut. Possimus quisquam harum consequatur ipsam nisi. Ducimus nam praesentium ut.",
    },
    {
        id: 29,
        date: "2021-01-15T18:20:35.140Z",
        status: "rejected",
        command_id: 42,
        product_id: 91,
        customer_id: 265,
        rating: 5,
        comment:
            "Quaerat consequatur quia dicta sunt. Quasi assumenda nam. Et ratione ea. Aut ut voluptatem voluptatem omnis est hic quidem. Iusto dolor quo.\n \nEum voluptatem aut aut. Voluptatum nisi earum beatae ut. Hic ducimus ut exercitationem. Velit beatae iure. Aut recusandae praesentium qui aliquid corrupti in illo. Sunt sit numquam aut voluptatem.\n \nNecessitatibus voluptate enim voluptatem ut dolorum voluptates expedita. Magnam vitae ut placeat impedit est ea dolores. Ut eum quidem rerum laboriosam magni minima rerum autem. Et sit nam ab voluptas maxime. Commodi eos alias amet. Culpa eos accusamus dolor sunt sint quia quia veritatis.\n \nUllam voluptates pariatur porro nostrum quisquam ad. Accusamus provident laudantium ex possimus hic enim et. Reprehenderit ducimus nobis modi ut doloribus enim.",
    },
    {
        id: 273,
        date: "2021-01-12T13:24:57.270Z",
        status: "accepted",
        command_id: 515,
        product_id: 23,
        customer_id: 470,
        rating: 5,
        comment:
            "Fugit aut necessitatibus adipisci et accusamus sit et totam odit. Cumque eaque eaque quia similique magni placeat. Et perspiciatis praesentium quisquam ullam nemo hic praesentium.",
    },
];

export default reviews;
