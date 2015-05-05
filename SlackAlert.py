from sys import argv
from slacker import Slacker


def SlackMenssage(UserAccount):
    # Send a message to #general channel
    slack.chat.post_message('#general', 'Hey <@' + UserAccount +'>!! Se ha encontrado un nuevo proyecto!! :pencil2:', username='Search Udacity Bot', icon_url='https://lh6.ggpht.com/tAZ1z5QqHrDdq2X4cLa3Ut2c1TBArhgf5SY6HPZl4qfu69HsIxSdnVm0ZAOUmO9PELVZ=w300')

def SearchUserID (NombreUsuario):
    for i in range(0, len(users)):
        if users[i]['name'] == NombreUsuario:
            return(users[i]['id'])
        else:
            return(NombreUsuario)

def SendAlert(UsuarioSlack):
    UserId = SearchUserID(UsuarioSlack)
    SlackMenssage(UserId)


if __name__ == '__main__':
    slack = Slacker('xoxp-2715349875-2952772808-4748588007-7dbb57')
    response = slack.users.list()
    users = response.body['members']
    script, UserInput = argv
    SendAlert(UserInput)