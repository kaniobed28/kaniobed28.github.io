'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fa2d0b9725b4bc1941145663dabe86d1",
".git/config": "98a4682c86650f175d88d0a9b2b49fcc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fc18ed017a18a140c4887239a4dcaf07",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "832fb040a5a0ed6bba40b1c196019247",
".git/logs/refs/heads/main": "a397839624ad912fc44ebd3269cff941",
".git/logs/refs/remotes/origin/main": "9fb482a2dc1142affa38cf8f4a908d2c",
".git/objects/00/0efad04d56dd0a008476c6bd6481a8c5639d6b": "37b206dc1530d5362ffa382b29149c44",
".git/objects/00/923945b4862ae51614a0f31609189e7381dbf5": "5eab8b304593c51f3c88fc7159755aa8",
".git/objects/02/4bb9f900a249058e08f5f1eb0f1c40213d0331": "3f5e503c22cf492e40cc866030dbeb9a",
".git/objects/02/70007687af9e60dea82b18b141431e4a13060c": "a16577839e44a4b1aa84a06b841ec44a",
".git/objects/03/4cd736e55e5d83b4c3c9041e1b82db76ddf6f8": "2f443740b2d50c5ee716326db8436f13",
".git/objects/06/82a61175208cf8ed00a3f470b99c7075aabbc6": "02e405a7b40df354668c13112bbe5520",
".git/objects/07/174f41f437ad567924fee2b4b4f2f64e2b5dec": "6c42077f525331589be8c7998fea5cdf",
".git/objects/0b/86cee6850f1d59088c6aea97cc6b1e300185bb": "7eb8531fb15c73f2e74986d10bf39387",
".git/objects/0c/b856a240a131139c7d53f3896200b99c5245cb": "cdb7e6c6666a07ae31a16d6ed3ed05a1",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/16/104144220ba87180a642ea130683692791dc2f": "68e7691615b581a3d3ea9ba37d65052e",
".git/objects/16/40ab1788254bddaec51798b8790549bd57156a": "4c4035cb2ce5dc4accaf19de82bdb74e",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/fdd3433af31c48e49cde49ab3aa0daad0cf0aa": "f29d2c2926bf22230589195b57a4b515",
".git/objects/1d/2ea0f3f3012bc02276d5dbf9802788e5d4a8c1": "e2986160acf5b41fc9be5bf2f76caee8",
".git/objects/1e/05d5e59bee44d05e64eced74fdaf2dedbd8fed": "61334ec2a788c64399109da465e971b6",
".git/objects/1e/5564ea7e70eccde1b943d8fc732eaec50482b6": "754b79e9e036a5379c6a36a197f0047b",
".git/objects/1e/71ae8425c02e0c68bb53f0a616d5287d4512a5": "5b7e01dbeef8059fd7abf0d26c7cdf03",
".git/objects/1f/8b99547e79368a42c7f94d9d9a8f1913f4aec8": "e2037febb19c49b66b2930bbf5cd70b4",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/83571b49b351b2d15c1afbc17e4706053303d8": "6b8c3797ba861c17e42c897d3108e813",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/091c5107e23844cd144f9c4b5a4bd9f3f9b6dc": "63b7d1e8232f447c0b598a6fc067a1d2",
".git/objects/26/4c83255d042e0706ebf8ec7f65c87b29d2eb81": "1e70153a19e3dd17d1cd79f7c72743a9",
".git/objects/2a/ba4c6e893f0a73bd615bddf8d58a810ecaa4a0": "85919f4f140a57367c3b463b09d04608",
".git/objects/34/52131bc494e13174fd63e29e700f5363bea2f5": "44c901977bfe7f7394b6f4b3b5bfd868",
".git/objects/35/313cb14d5d25a58d0329593077cf24acfcb630": "9f1e3984cdc49d60b33692363372c734",
".git/objects/38/1e772ec1d5829e27089626db5812b4a3497596": "d2b43a680565b89eefb23e21d48c3187",
".git/objects/38/234ac98270f3805aa1fc904e8f7f03d4e83662": "42fd839d8d3de5a9158137396be32d8f",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/2a7bc8f5640a93b5e632e79112f96c8c022611": "c53294fff0f92918f68af9e8d3dfc963",
".git/objects/3b/3e92d1b9ec4ec129cd49d35458670d34984b7a": "68dd238407bba61d14532aa24435c1da",
".git/objects/3d/b8b9fc1723ed14e9ad9113b93918f937f7ac7d": "9f49c6c02d7c7524eb2df2b8ac092daa",
".git/objects/43/e6be17abfeabc16239a3680f9015b8db848693": "a76613addc22aceb15ad246c077bf2ef",
".git/objects/44/32eae36227f9f9bdd42f6fb1f687f6c9496fbc": "8f794817ce368fb9c3ec90325d5e173a",
".git/objects/44/7d77599a50a0b0f7427b8516fbae11898b857b": "9f8d76621abcc830d933e3d11876c1f1",
".git/objects/45/dfc1407c8c5fa9c835517d830106577856f809": "81dfe2c9b7be3170766d346bd9f64a21",
".git/objects/46/15ff1c2ed78e726a8e05f884b05246e618d029": "fa7b2dff66dfc2a2916b8dbacc24a8a0",
".git/objects/48/37f72f5e7d56f3dca0cd8904326cac24b764c1": "c6bd906fb8a250a053d2fe03a247834e",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/b5fde5b4eefd9322e05369776b9d31d40ea11e": "22cfaf587caa6e08afad6b1cf109ee3d",
".git/objects/4c/542fae8f23771306ba96416565d2db457125e6": "10c39407fe7a19f09700d87dbb0154ac",
".git/objects/4d/f145bfcbcf19bc61d70059fcb9e9e6855fae43": "310cd6f3c549c1081692f3117498b11b",
".git/objects/50/620946293e33a8574363a77be6a682e49d204a": "a2daac25b3d2946149ec2051f1902c5e",
".git/objects/52/598da232f2825bc5dce32d22de0bbabf5e1f49": "d545fd51e834738e17f6e73d9b885cfa",
".git/objects/52/89fe92812e23bee0b8eef5457ee3fa2ca8d8b9": "17a1b5d867b7d61a7fddf9297eaea263",
".git/objects/55/3f82258010c0a36877056bf523d05b1b9e0907": "e0d2521d2b6f2d4eec3dbb87a574fe88",
".git/objects/55/8017275619ad1adf21895f5e9363f0d5f4bf06": "afe53b9db458ffa82c8eab255a68c7a4",
".git/objects/55/a83fd1f5ebeea5a4dcf790d8529f0e08c2cb6b": "5d83d5545a1b9d513794472f34d93277",
".git/objects/55/d24451ab1e33404aad7ccc0652237e584e9545": "b289caea6a1390c7a6a84894591bb494",
".git/objects/57/4d56fdc7580438fd4e4e93da30927d05eb402e": "1b9951853e44ba31a1efa72f97a5da94",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/cf29a97c43be00659dbdbc5991a91e9d4b4622": "c3cb51ba87570e8c64d5ff493357e0ac",
".git/objects/59/6cc8ff13a933631e83c43e88beec18a527896e": "3e6d96a0f3b1163f0529d54d0999ff0a",
".git/objects/5b/a8d9adec6949824e049d3da7ae0aa75d4e0ed5": "c0aa6649cd0b11770fcbf8dffcde2d6e",
".git/objects/5b/d0f6ee05c002eada5eeaddcc34ead9f1eb10d0": "5de15270d8659ea540410bce60d5069d",
".git/objects/60/aa6badbb2984d567d9099ecc1849b538b99c45": "668816e868d7eb0f6f2bdd0a8b35046c",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/14fe35e058ba2e2c84cb85e4cfc7ae532490b9": "7d961cbb212c5697b7ae58e08ba889bc",
".git/objects/64/53d6f97c0cc093339fbf45492521c8fdc5750d": "6c89a31a490b5df3c56b355e9202a2e2",
".git/objects/65/245bd7013a9b9f7afbddaa083165151c371cf3": "52a2cf81a05375dd349c54f0367dfdbd",
".git/objects/66/dc98e8c730759587ae02920308d74c18dd83cd": "680a0c834c585d5450a41805316a5eeb",
".git/objects/67/e38e1e86a5794aba6510b594d97871d78f1cc6": "349523348f0d28d2398b7828ed37fc21",
".git/objects/69/0d5d365e5c531d32a04d9f07eea9fcb1e813b7": "6d2a0b23651c4bf0d94a83b0b4293be0",
".git/objects/6a/02957b13f36bd3462f659dbf55c863580e8588": "82e82f47cb699c1af3a2132eecfa437c",
".git/objects/6c/662fa11f7978aff47202a4f72d0e390b23eb34": "24ace5c69244f341f288fad63d316e3d",
".git/objects/6f/560e6369788a8034acee76ea98d78264597ef4": "76e53ff6f0aac44e75b8caff42790f69",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/9c2e1d26d9bb59e4c4599849e7c12b33e413b1": "32c1644941f5571fa8052efd0bb3ea4a",
".git/objects/78/38949813be5ae8bd4a12324f000b6232e29920": "544766a13bac668fb12debac8c9ed5d0",
".git/objects/7a/0fd169ac6be77e63f55dd1a1b17383bb789669": "beb1ca8d309a532ed40b109989546dcb",
".git/objects/7c/0db8687f356ebd5c4d644fe6f7e1a1040a5c7f": "d0b4cb2d01f1b339b74d53aaf78b930f",
".git/objects/7d/cd24bc62165047951387d4db6106427b8063e1": "31230e52a527f6065e287d058c6c89e9",
".git/objects/80/05f0ab57c51cfd533ed95c66cfcfdbd6cfc4f3": "849be44d5ccc150beb102548ae5f7bbf",
".git/objects/80/2b2f04d546ab08e5407cfde0449bd5bee3f260": "8ba2865777a13e27e1e77d63bc899fdc",
".git/objects/80/3d7d411bd3f18a7236fd85f72012b2b6083ffb": "d50bf352e72e60e6738ecc9fd38ba5c2",
".git/objects/82/ed3a5e27b832ee252b272fd2e2d2751a0a6e25": "5d8d67b00b28e66d0411e32be664b682",
".git/objects/85/30101c75ff76b2629e2e62834841dfed8849c5": "4ea33e3dd67fa310d7dd9c5f042c64db",
".git/objects/85/e7ab4d178f10a0be882876728052f4bf733be4": "43d50762689c0447ac13ca1f0e27637c",
".git/objects/89/39f0367d5c97c326af5260fdb1ca82b7cb6dd1": "87d788fea0ffcd0a324dd45ef79c7d10",
".git/objects/89/7340aebfa10de56f87d0f262d7f7f1e6b745dd": "b8b581382d3570a7a6dfc60b81e4e06e",
".git/objects/8b/0327adc304475ebaeed9ca78b50ad54f3d90a8": "a20dbfc6bd0a286d9b1897359d890082",
".git/objects/8b/aaa585c99a0a14cb632059831856bf0c8e7a20": "4e4c63c60d6a2bcd246a10b5ea600ffb",
".git/objects/8d/cf708ea8ecd9cfcf9ccee489ca69caf8d49a41": "5aaa1a2d9f578563f4b268b60cf5b1b9",
".git/objects/8e/b9be68acaf792aad2d6e6e3e29df7340b51023": "81709734676806b8711d992c89c57a80",
".git/objects/90/9e62a218ef09669180925e3180aee545f80595": "2831d0be864112a5f24a2b833c327de4",
".git/objects/91/02b8a202b454f0b301ed9c53505cc47c2fcca1": "9647b56fe4cd7cfc5071fbbb16a04560",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/e9f2090bf63f29662baecbd905a37a3aec5106": "07a2a653afb735de566ecef8e06c0bab",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/dc5c7c15ce2dfa828991ff7eec8761cfd73263": "1bd4ea6098a1b1f63fe3a0135c19777a",
".git/objects/96/f043c1f7068a6045c79179aabfba0723322af3": "2c5e50dad99f7549fcc92c3f2cbed3b7",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/9c/3c6ab52410a6eec5c23227402c8f64215363b1": "fad43f1173aa1f94e626a9b5a8ddc48f",
".git/objects/a0/997a2ad25813ffcb2d12f3cba928f9f2e209f7": "e6516ae36db667ec0071045689c1a261",
".git/objects/a1/11ece69d65192afe0ac9d4abf6bf5894941793": "7a7432e8be3fee8253869fc78598eeca",
".git/objects/a1/6611a5240c2c6549de8a08746f957b763f0366": "2246afca5718a57023547cb353990901",
".git/objects/a1/807cc58ebe8449471de1fc0182deebe30bff17": "0905f65cfd53a4880d2611ebfc8a7cb5",
".git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
".git/objects/a3/55ef832a7c19c465a1ee44decd2fd7e63f3f13": "e93d297043218141a2a485c6867078ab",
".git/objects/a5/d967ca38da21abf02ed183aff75334e8f194f8": "d7567ad60a059165a805d1644c28ccbc",
".git/objects/a6/5cfe10de8d2396da46cab25b761bf5f1f10b55": "b23c711a5f64f97f5503173ab6d5a548",
".git/objects/a6/c104fad4cb1890bc8388fd3b9cb4a7f7e834a0": "775fe362d3e36c2f71d60b67ba57762f",
".git/objects/a7/b70f79bed57ab163c95fe84619146960b5c5db": "3f613bc1851c81247f7de43be3a1604c",
".git/objects/a8/775dec56d8f596aa405440acf1e68ecf6970d1": "98594296f43f56b6a8e8ec1992210807",
".git/objects/aa/b7ede1a0fb0596bf2f76428af6071362c5bcb9": "7fc9c27fa88856be4320a9daba65ac5e",
".git/objects/ab/224a8c688925418aa23e5bfbc88ecb22e756af": "1c2d7c50904dc33f5b8b626f5a3d8a81",
".git/objects/ae/5f0ade39365d5782785778eaafed44ab9844f7": "a4b35beaf6a3d192778ecd357e4e1de2",
".git/objects/af/67117e092d90348e11d266303cbd0f8508c25f": "99618986bdbb545fdedd1cac9507750d",
".git/objects/af/7e717109f2a85f57fb365c6988aa4098541dce": "4e2a3585749b222b4748fd18e378eca0",
".git/objects/b2/4e8968373ca3a5ea87bc25cd24b16848acceb2": "f8c989dbe716ab37986f8688591aed71",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a50374f05abc36791f4466b09db9a5d9698195": "45ecdc4289b2fc0ee67b63d90fa0c89e",
".git/objects/b9/3ef21bed26da5212d08f67c8eafe4a2bec43b9": "8605ac8d03b5600140523681c3e16b3f",
".git/objects/bb/2cc611767da217be0d634d2c7e5c022a5c1561": "d186007fa5489a97e5058cf88389c6b0",
".git/objects/bb/8f28b1a9ddace8d07dac2d8580c94ceb0046f8": "08d7f51a062ae879e7854f38851aa067",
".git/objects/bb/d85825ad1706e57d6ea34042a99a207e7e9958": "3bf941bf36790a07d1eb54468f5c6aca",
".git/objects/bc/d0c944f1b6ad36be0ccbb55bd77c9754411d73": "c023e4f68b9dcc90ca8b614832f80a77",
".git/objects/bd/8c391d5ded65679d02ef319e01324456498c26": "17b342111ae31f156812584e7181b6fc",
".git/objects/bd/9790c21cebc1f45e7bd5364c42950c1f362fbf": "813309d0ff8963811e9ad19cd8859462",
".git/objects/be/6d15643f3d185fb3eceee8c8f485d2585ce929": "df1de7ccfe958248ae5aa0fddd42aeb7",
".git/objects/be/900027fa2624bf6870b92b9db75c05384372a3": "2e9e293f04e9e4ba887a8ef19bc6f779",
".git/objects/be/bd75e9bd4c71fae1baf33ed56ed0eb7dec6c6a": "1bb885822d60ecbce60981127a8a6717",
".git/objects/c1/f14318468b75e62c7ea4dae2e4cfdaf32d106a": "105298ffd9b8725cc28001ac6fdc3075",
".git/objects/c2/e0b391265df619decaba4dedf7b3c3d2b7cf17": "71a3d4c7d936108c4a2582103a6e9f6e",
".git/objects/c3/ace917fbb77a8de6fc723cfe0ecb126fcde262": "56a1abd656f7cf77d8a7396b07004fb6",
".git/objects/c4/579c0897c7c7d1803ec6b42f84e39a3b920fec": "57b07b8d59148c981c9df3b1ec3240ef",
".git/objects/c7/30f1fea26032824cec0a875040569322f98445": "496bb49452e331bc4519b245f849c9db",
".git/objects/c8/d82a749e4578792d526bdd4b68829119cb2b0f": "2d213de83165e8412c19580758404e71",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/1a77b4cd1429bb6e96c8c053fd7e549622c7ca": "e5c33343b50b3c5600bd5c5fbbdc7580",
".git/objects/cf/72d82816c3140e3ca6ba3c88fa90221c687a42": "699086a9aa4d68e8b76552ae6b046a34",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/f3e5338e0db2952357d4502ec734173f28175a": "e6882b40210ffd4e54baa1d49192961b",
".git/objects/d2/f52b7a3b1e2e7135aef1375a6de64fe551d91c": "18892a5c67b230f91e5a977ef0ef6709",
".git/objects/d3/9cff3eb449533785f40cfcf5d01091ca5dab24": "e2c6ac46598b88ed04159f60c27ee0cb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/4c05fc78d979e6e3d0de0ee96c0c3100bddf8a": "492e852720526bb058820b8b72eeaa57",
".git/objects/d7/e5dbb44d08e03f50b95ff366f0a659310a22f4": "7a0c398f54829a00ea5cbc6457c6db17",
".git/objects/d9/9b8fec26d3603669a8991af4333d47d898b112": "f899bed2f8c15de3a63c34348c42a580",
".git/objects/da/dc33574d90d8e2e507ec6cbdfcbb17f8b69c9f": "7144525c7de8005bfaf0e9a13ccf9e24",
".git/objects/dc/f65e6ab70b4af0e0b419fb7de92ca0e28159a7": "560e142d97cef8ba348fc2554356a392",
".git/objects/de/7959bcdc9947efc905a184e39edde7beb63809": "422e2ce70478c81640a5175df9967ab7",
".git/objects/e0/a0abb7f3e521288305d32dc97cce61eddd30cd": "4cc8821082bb222f5202f9f542014b15",
".git/objects/e1/e11afc5381e63e21c43310c7916de4e39cdb7d": "9ac40bf11f8c0dc2b42cdfb7cc7b4ea8",
".git/objects/e3/2787336162115492ec391cb0d23edd77c181ff": "6c8d01412777ab07100e1ada2867b49c",
".git/objects/e4/6c43fdd872d457bed6bcac8f96cc13a3d51551": "2c82b3ca519c4bfab4b7aa2465205c01",
".git/objects/e4/6f6a75618c511d9063e594fd281ddecc233564": "c0bdefa89524bbe524cf62681816c207",
".git/objects/e7/d9380603338dd70fd545a075450987ab53e04f": "8f62f9cd6ab53c3ed08de206615d7ff7",
".git/objects/e8/cf21ec12bfdc1793ed0673fb14905466537ee0": "1583dd105e194926d499e6fef592342c",
".git/objects/ed/ebbaef3db6445efa5bdafe66d3293beea5a8c3": "815650c66b45152178025d48f812fba8",
".git/objects/f0/35ffe091c7b4e59d221f9f3c4b0a13e3a65804": "b114706b873845e437bafc37b9945460",
".git/objects/f1/0d62420fc856ed082fb340b507ca24de4935e6": "98ecc0e8e416c32537481d6bc491374f",
".git/objects/f1/dfa86cd0815ec352e91ccdd5df82c3b80ac450": "b98f2b1e1392b21c16a2d2e19b2a4e69",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/ba6e9d70d7ab727282c0c71caa3a64be0f50c0": "34ae87b3470273ba7ad2628bd4ae20d6",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/f6/6aee81f15423cef22649465c376f8ac066a287": "70671128b9585dfa4e3b76af0d4fa876",
".git/objects/fb/881f3b308ad6481973296ae141fe063b8a3414": "bf6be39938faa1f537dcdb192f1b18be",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/fb/d9b8ec74c138ea78f38160f0ddf6d01c80f9a0": "b14d572c8963306d2532fe0f617d6ffe",
".git/objects/ff/f39472a6d16d4e4bbf4fc48101efdbae8841a4": "66c7fd40749bfccbc0493cee8216c50f",
".git/refs/heads/main": "bcd1ca6c79587e93646bbe5e6b781398",
".git/refs/remotes/origin/main": "bcd1ca6c79587e93646bbe5e6b781398",
"assets/AssetManifest.bin": "db7f6eaf2881acf387ec7b879ab4d73a",
"assets/AssetManifest.bin.json": "c883f24b6fd6ae23036766246774d992",
"assets/AssetManifest.json": "b73ccd126208292af4294b6600e74816",
"assets/assets/img/campus-sell-favicon-black.png": "31118d71f19bd29d1de05edf8afbbcba",
"assets/assets/img/campus-sell-favicon-color.png": "c9a97aa3d09ee829cea71283d7ece2f4",
"assets/assets/img/campus-sell-favicon-white.png": "d10277f86bc3ade3483fc5e810fa3676",
"assets/assets/img/campus-sell-logo-transparent.png": "5e0e5a8582c52beeaccae8f368c1a3b7",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "b869b0ddda4d07bccc97aa3b17819ffd",
"assets/NOTICES": "13ee34239ff674d84c72686cb2e044d6",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "7305117efc30c0d46e6767d5ceb44fef",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "4625398b603bcbcc19d09c4661cae495",
"icons/Icon-192.png": "b0a677476f7dc50801eb7ee07c836f22",
"icons/Icon-512.png": "40cf15de31d921ac90eb8ceaf96ae369",
"icons/Icon-maskable-192.png": "b0a677476f7dc50801eb7ee07c836f22",
"icons/Icon-maskable-512.png": "40cf15de31d921ac90eb8ceaf96ae369",
"index.html": "985f107cd8d56f38a083efe6831fb222",
"/": "985f107cd8d56f38a083efe6831fb222",
"main.dart.js": "f64dbe0e2b42e428fa1f5627cde1f3e4",
"manifest.json": "4a10ed73db0160133ecab05ff49cc69f",
"version.json": "653fe60457d27f62855f15e5ba7aeeca"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
