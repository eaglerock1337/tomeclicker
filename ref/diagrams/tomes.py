from diagrams import Cluster, Diagram, Edge
from diagrams.custom import Custom

with Diagram("The Tomes of Magic"):
    with Cluster("Tier 1 - Introduction"):
        tome_1 = Custom("1 - Tome of Magic", "./book.svg")
        tome_2 = Custom("2 - Tome of Mana", "./book.svg")
        tome_1 >> tome_2

    with Cluster("Tier 2 - Basic Applications"):
        tome_3 = Custom("3 - Tome of Mana")
        tome_4 = Custom("4 - Tome of Attack")
        tome_5 = Custom("5 - Tome of Defense")
        tome_3 >> tome_4
        tome_3 >> tome_5

    tome_2 >> tome_3


# with Diagram("eagleworld.net k8s cluster"):
#     internets = InternetService("Internets")

#     with Cluster("k8s.eagleworld.net"):
#         with Cluster("eagleworld-api"):
#             core_deploy = Deploy("eagleworld-core-api")
#             core_rs =  RS("")
#             core_pod = Pod("")
#             core_ing = Ingress("/api")
#             core_svc = Service("port 4000")

#             core_ing >> core_svc >> core_pod << core_rs << core_deploy

#         with Cluster("mr-poopybutthole"):
#             mpb_deploy = Deploy("mr-poopybutthole")
#             mpb_rs = RS("")
#             mpb_pod = Pod("")
#             mpb_secret = Secret("github_token")
    
#             mpb_pod << mpb_rs << mpb_deploy
#             mpb_pod << mpb_secret
        
#         mpb_pod >> Edge(label="API calls") >> core_pod
    
#     internets >> Edge(label="k8s.eagleworld.net") >> core_ing
#     internets << Edge(label="GitHub API") << mpb_pod
#     internets << mpb_secret
