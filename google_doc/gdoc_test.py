from googleapiclient import discovery
from oauth2client import client
import httplib2

user_agent = "Drive API Python Quickstart"
token_uri = "https://accounts.google.com/o/oauth2/token"
revoke_uri = "https://accounts.google.com/o/oauth2/revoke"
client_id = "511801326402-5jo82okccra3utjuokvookijcqsk7jnv.apps.googleusercontent.com"
client_secret = "d630xUwk9RAsPXjr9VHvd6Jn"

def get_gdoc_service(access_token):
    '''
    Create and return the google API retrieval service and fetch the content from the given gdoc id
    '''

    credentials = client.OAuth2Credentials(
        access_token=access_token,
        refresh_token=None,
        token_expiry=None,
        user_agent=user_agent,
        token_uri=token_uri,
        revoke_uri=revoke_uri,
        client_id=client_id,
        client_secret=client_secret)
    return discovery.build('drive', 'v3', http=credentials.authorize(httplib2.Http()))

service = get_gdoc_service('ya29.a0AfH6SMBPasyuWlDnRTWfs1dYKUxyVBL9REhbfxKUSFBIXdBhchvP6hsIUHW6pOrBPdwZXcWRyzG05p-bImdkAfbWP97rx7zR2HaNxmwT6zp7K01yalqeEdJseGcOJMxZdUjleuE2NKukelmiSm9Ceszo8MliPwthxyFYWfj7NupfeAnkqf6Ep5-hrMc_gm19tXXGYjQflWQ2rTelUalfu8Mk9dYhIEUEcgEDhA')
ids = b'14KSV0yqp6KRYT-vdGBeKBYph_0RKnP13'
image_file = service.files().export_media(fileId='1UDJWXB16bhCkSJlc3VbJu62lWeCAuWqwvTmHGhsaykA', mimeType='text/plain').execute()
print(image_file.decode('utf-8'))