<template>
    <div>
        <div class="sidebar">
            <div class="logo">Your Logo</div>
            <router-link to="/dashboard" class="btn1">Home</router-link>
            <router-link to="/traffic" class="btn1">Traffic</router-link>
            <router-link to="/feedback" class="active">Feedback</router-link>
            <router-link to="/login" class="active1">Log Out</router-link>
        </div>

        <div class="content">
            <div class="main">
                <div class="overlay"></div>
                <div class="heading">
                    <h1 class="head">MANAGE <span>NODES</span></h1>
                    <h3 class="sub">Lorem ipsum dolor sit amet</h3>
                </div>

                <div class="manage-nodes">
                    <!-- Dropdown untuk memilih lantai -->
                    <div class="mb-4">
                        <label for="floor" class="mr-2">Pilih Lantai:</label>
                        <select v-model="selectedFloor" @change="handleChangeFloor" class="p-2 border border-gray-300 rounded">
                            <option v-for="(floor, index) in floors" :key="index" :value="floor.id">{{ floor.name }}</option>
                        </select>
                    </div>

                    <!-- Form untuk menambah atau mengedit node -->
                    <div v-for="(formNode, index) in formNodes" :key="index" class="mb-4 p-4 border border-gray-300 rounded">
                        <form @submit.prevent="handleSubmit(formNode)" class="flex items-center">
                            <label for="node" class="mr-2">Node:</label>
                            <input type="text" v-model="formNodes[index].name" required class="p-2 border border-gray-300 rounded mr-2">

                            <span class="text-gray-600 text-xl">&#x21a6;</span>

                            <select v-model="formNodes[index].selectedExistingNode" class="p-2 border border-gray-300 rounded mr-2">
                                <option value="">Pilih node yang sudah ada</option>
                                <option v-for="(existingNode, existingIndex) in existingNodes" :key="existingIndex" :value="existingNode.id">{{ existingNode.name }}</option>
                            </select>

                            <div>
                                <button :="!formNodes[index].id" @click="handleEditNode(index)" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded ml-2">Edit</button>
                                <button @click="handleDeleteNode(index)" class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded ml-2">Delete</button>
                            </div>
                        </form>
                    </div>

                    <!-- Tombol Add To untuk menambah form baru -->
                    <button @click="handleAddTo" class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Tambah Node</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedFloor: null,
            floors: [
                { id: 1, name: 'Lantai 1' },
                { id: 2, name: 'Lantai 2' },
                { id: 3, name: 'Lantai 3' }
            ],
            formNodes: [
                { id: null, name: '', selectedExistingNode: null }
            ],
            existingNodes: [
                { id: 1, name: 'Node A' },
                { id: 2, name: 'Node B' },
                { id: 3, name: 'Node C' }
            ]
        };
    },
    methods: {
        handleChangeFloor() {
            console.log('Lantai dipilih:', this.selectedFloor);
        },
        handleSubmit(node) {
            if (node.id !== null) {
                console.log('Node diubah:', node);
            } else {
                console.log('Node ditambahkan:', node);
                this.formNodes.push({ id: null, name: '', selectedExistingNode: null });
            }
        },
        handleEditNode(index) {
            // Mendapatkan ID atau data node yang ingin diedit
            const nodeId = this.formNodes[index].id; // Misalnya ID node yang ingin diedit

            // Navigasi ke halaman edit dengan menyertakan ID node
            this.$router.push({ name: 'EditNode', params: { nodeId: nodeId } });
        },
        handleDeleteNode(index) {
            console.log('Node dihapus:', this.formNodes[index]);
            this.formNodes.splice(index, 1);
        },
        handleAddTo() {
            console.log('Menambahkan node baru');
            this.formNodes.push({ id: null, name: '', selectedExistingNode: null });
        }
    }
};
</script>

<style scoped>
/* Styling untuk komponen Manage.vue */
.sidebar {
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
}

.sidebar .logo {
    padding: 16px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    background-color: #4caf50;
    color: white;
}

.sidebar a {
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
}

.sidebar a.active {
    background-color: #04aa6d;
    color: white;
}

.sidebar a:hover:not(.active) {
    background-color: #555;
    color: white;
}

.sidebar a.active1 {
    background-color: #e04848;
    color: white;
}

.sidebar a:hover:not(.active1) {
    background-color: #555;
    color: white;
}

.content {
    margin-left: 200px;
    padding: 1px 16px;
    height: 1000px;
}

.main {
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: #4caf50;
    background-image: linear-gradient(#4caf50, rgb(101, 204, 161));
}


.main .heading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
}

.main .heading .head {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 10px;
}

.main .heading .head span {
    color: #4caf50;
}

.main .heading .sub {
    font-size: 22px;
    font-weight: 300;
}

.manage-nodes {
    margin-top: 50px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.manage-nodes form {
    margin-bottom: 20px;
}

.manage-nodes label {
    font-weight: bold;
    margin-right: 10px;
}

.manage-nodes input[type="text"],
.manage-nodes select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 200px;
}

.manage-nodes button {
    padding: 10px 20px;
    margin-left: 10px;
    cursor: pointer;
}

.manage-nodes button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>
