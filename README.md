# Form Builder Lite

One of the most repetitive/error prone/boring/time consuming parts of writing APIs to me has been providing the final user a mean to CRUD their data. And don't even get me started on actually writing forms! This aims to simplify the process with sane defaults but large openings for when "life gets in the middle".

Provides Browse/Edit capabilities to a model/collection based on a Schema the backend blueprints during migrations.

This is a simplified version to showcase the logic, the full version includes full CRUD support, permissions/roles, indefinitely nested relations, sort, and search. The Backend part had to be removed, quick data mockup on /api/data, which exports data and schema.

### Gist

**The Backend** generates a Schema based on a resource when we run a migration for that specific resource. With a very light configuration and no need of persistency the Models gets transformed when a request comes from a specific area by a privileged user. The resulting object response receives the schema keeping the data unaltered.

**Schema** define a set of Field types the frontend renders (recursively when applicable). The schema is passed down to the 2 main components: Collection and FormBuilder.

### Main Components

**Collection** only provides quick rendering and access to the FormBuilder, similarly structured

**FormBuilder** reads a SINGLE model and a SCHEMA and renders an Edit form that bubble @input(s) up to the Store.

### Project setup

```
yarn install
```

#### Compiles and hot-reloads for development

```
yarn run serve
```

#### Compiles and minifies for production

```
yarn run build
```

#### Lints and fixes files

```
yarn run lint
```
