# Secret Manager Client 

# Why?
For convenient usage of the Secret Manager Service from browser application, node-clis or node services.

# What?
The convenience Library to interact with the Secret Manager Service - deals with the encryption parts so you could use it directly as a simple remote data-store for your secrets.

- The [Secret Manager Documentation](https://hackmd.io/PZjpRfzPSBCqS-8K54x2jA?view)
- The [Secret Manager Code](https://github.com/JhonnyJason/secret-manager-service)
- The [Interface Specification](https://hackmd.io/EtJSEnxjTVOOvRJdWGJlYw?view)

The exported object is a factory for clients. All methods are async.

If we donot provide keys when creating a client, then it would create new ones.

Current Functionality
---------------------

```coffeescript
clientFactory = require("secret-manager-client")

## create a client
client = await clientFactory.createClient( privateKey, publicKey, serverURL )
clientFactory.createClient( StringHex, StringHex, String )

# get produced keys
privateKey = client.secretKeyHex
publicKey = client.publicKeyHex

## client methods
client.updateServerURL( newServerURL )
client.updateServerURL( String )


client.getSecretSpace()

client.getSecret( secretId )
client.getSecret( String )

client.getSecretFrom( secretId, setterNodeId ) # a secret setterNodeId has set for us
client.getSecretFrom( String, StringHex )


client.setSecret( secretId, secret )
client.setSecret( String, String )

client.deleteSecret( secretId )
client.deleteSecret( String )


client.acceptSecretsFrom( fromNodeId ) # only then fromNodeId may set secrets for us
client.acceptSecretsFrom( StringHex )

client.stopAcceptSecretsFrom( fromNodeId )
client.stopAcceptSecretsFrom( StringHex )


client.shareSecretTo( shareToNodeId, secretId, secret ) # set a secret for shareToNodeId
client.shareSecretTo( StringHex, String, String )

client.deleteSharedSecret( sharedToNodeId, secretId )
client.deleteSharedSecret( StringHex, String )
```


---

All sorts of inputs are welcome, thanks!

---

# License

## The Unlicense JhonnyJason style

- Information has no ownership.
- Information only has memory to reside in and relations to be meaningful.
- Information cannot be stolen. Only shared or destroyed.

And you wish it has been shared before it is destroyed.

The one claiming copyright or intellectual property either is really evil or probably has some insecurity issues which makes him blind to the fact that he also just connected information which was freely available to him.

The value is not in him who "created" the information the value is what is being done with the information.
So the restriction and friction of the informations' usage is exclusively reducing value overall.

The only preceived "value" gained due to restriction is actually very similar to the concept of blackmail (power gradient, control and dependency).

The real problems to solve are all in the "reward/credit" system and not the information distribution. Too much value is wasted because of not solving the right problem.

I can only contribute in that way - none of the information is "mine" everything I "learned" I actually also copied.
I only connect things to have something I feel is missing and share what I consider useful. So please use it without any second thought and please also share whatever could be useful for others. 

I also could give credits to all my sources - instead I use the freedom and moment of creativity which lives therein to declare my opinion on the situation. 

*Unity through Intelligence.*

We cannot subordinate us to the suboptimal dynamic we are spawned in, just because power is actually driving all things around us.
In the end a distributed network of intelligence where all information is transparently shared in the way that everyone has direct access to what he needs right now is more powerful than any brute power lever.

The same for our programs as for us.

It also is peaceful, helpful, friendly - decent. How it should be, because it's the most optimal solution for us human beings to learn, to connect to develop and evolve - not being excluded, let hanging and destroy oneself or others.

If we really manage to build an real AI which is far superior to us it will unify with this network of intelligence.
We never have to fear superior intelligence, because it's just the better engine connecting information to be most understandable/usable for the other part of the intelligence network.

The only thing to fear is a disconnected unit without a sufficient network of intelligence on its own, filled with fear, hate or hunger while being very powerful. That unit needs to learn and connect to develop and evolve then.

We can always just give information and hints :-) The unit needs to learn by and connect itself.

Have a nice day! :D