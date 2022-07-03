import yaml

tomes = yaml.load(open("ref/tomes.yaml"), Loader=yaml.Loader)

tiers = yaml.load(open("ref/tiers.yaml"), Loader=yaml.Loader)

print(tomes)

print(tiers)